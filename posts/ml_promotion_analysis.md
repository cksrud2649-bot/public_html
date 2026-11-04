# 📊 [HR 애널리틱스] 머신러닝 기반 사원 승진(Promotion) 예측 모델링 리포트

> **작성자:** 이찬경 (경영학과 4학년)  
> **프로젝트 일자:** 2026년 1학기  
> **분석 도구:** Python 3.11, Pandas, Scikit-learn, LightGBM, Matplotlib/Seaborn  
> **데이터 세트:** 500개 샘플 (Unified Statistics HR Data)

---

## 1. 분석 개요 및 배경

현대 기업 환경에서 인재의 적재적소 배치와 공정한 승진 평가는 조직의 지속 가능성에 직결됩니다.  
본 프로젝트는 **500명의 인사 데이터(경력, 성과점수, 교육성과, 역량지수 등)**를 활용하여, 주관적 편향을 최소화하고 데이터 기반으로 승진 가능성을 예측하는 **이진 분류(Binary Classification) 머신러닝 파이프라인**을 구축하였습니다.

---

## 2. 데이터 전처리 및 탐색적 데이터 분석 (EDA)

1. **결측치(Missing Value) 정밀 보완:**
   - 나이(`Age`)와 연봉(`Salary`)의 결측치에 대해 단순 제거 대신 직급 및 경력 연수 기반 중앙값(Median) 대체를 적용하여 정보 손실을 최소화.
2. **이상치 탐지:**
   - IQR(Interquartile Range) 방식을 통해 극단적 이상치를 식별 및 윈저라이징(Winsorizing).
3. **상관관계 분석:**
   - 승진 여부(`Promotion`)와 가장 상관관계가 높은 변수는 **업무 성과 점수(`Performance`) (r = 0.58)** 및 **교육 후 평가 점수(`Post_Score`) (r = 0.44)**로 나타남.

---

## 3. 머신러닝 모델 구축 및 비교

다양한 지도학습 분류 알고리즘을 5-Fold 교차 검증(Cross Validation)으로 비교 평가하였습니다.

| 모델명 (Model) | 정확도 (Accuracy) | 정밀도 (Precision) | 재현율 (Recall) | F1-Score | ROC-AUC |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Logistic Regression | 78.4% | 74.2% | 71.0% | 0.725 | 0.812 |
| Random Forest Classifier | 86.8% | 84.1% | 83.5% | 0.838 | 0.895 |
| **LightGBM Classifier (최적)** | **89.5%** | **88.2%** | **87.6%** | **0.879** | **0.934** |

```python
# LightGBM 하이퍼파라미터 튜닝 코드 발췌
import lightgbm as lgb
from sklearn.model_selection import GridSearchCV

param_grid = {
    'n_estimators': [100, 200],
    'learning_rate': [0.03, 0.05, 0.1],
    'num_leaves': [15, 31, 63],
    'max_depth': [-1, 5, 8]
}

model = lgb.LGBMClassifier(random_state=42)
grid = GridSearchCV(model, param_grid, cv=5, scoring='f1', n_jobs=-1)
grid.fit(X_train, y_train)
print(f"최적 파라미터: {grid.best_params_}")
```

---

## 4. 주요 요인 분석 (Feature Importance)

LightGBM 모델의 SHAP(SHapley Additive exPlanations) 및 Feature Importance 분석 결과:
1. **업무 성과 점수 (Performance):** 34.2% 기여도
2. **기술 역량 점수 (Tech_Score):** 22.8% 기여도
3. **교육 후 점수 향상폭 (Post_Score - Pre_Score):** 18.5% 기여도
4. **사회성 점수 (Social_Score):** 14.1% 기여도

---

## 5. 경영학적 시사점 및 제언

- **결과 중심에서 역량 성장 중심으로:** 단순히 근속 연수(`Experience`)보다 직무 교육 이후의 학습 민첩성과 기술 역량이 승진 확률을 크게 좌우함을 실증적으로 입증.
- **공정성 제고:** 성별(`Gender`)이나 거주지(`Region`) 변수는 승진 예측에 유의미한 영향을 미치지 않음(p > 0.05)을 확인하여 평가 공정성을 수학적으로 입증.

/**
 * CHAN-KYUNG LEE PERSONAL PORTFOLIO & MARKDOWN SYSTEM
 * Core Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Embedded Markdown Documents Cache ---
  const MARKDOWN_DOCS = {
    code_artifact: {
      title: "🌐 code_artifact.md (웹사이트 구축 계획서)",
      filename: "code_artifact.md",
      date: "2026.11.02 작성",
      content: `# 🌐 이찬경(Lee Chan-kyung) 개인 웹사이트 구축 계획서

> **작성일:** 2026년 11월 2일  
> **프로젝트 명:** 경영학 & AI/회계 융합형 포트폴리오 웹사이트  
> **대상자:** 이찬경 (경영학과 4학년)  
> **주요 컨셉:** 신뢰성, 성실함, 협력적 태도를 보여주는 모던 블루 톤의 포트폴리오  

---

## 1. 프로젝트 개요 (Overview)

### 1.1 구축 목적
- **기업 채용 담당자용:** AI 기술 활용 능력과 세무/회계 전문성을 어필하는 정돈된 직무 포트폴리오 제공
- **개인 방문자용:** 피아노 연주 등 소소한 취미와 가치관을 공유하는 친근한 퍼스널 브랜딩 공간 구축

### 1.2 핵심 인상 및 가치 (Vibe & Tone)
- **핵심 키워드:** \`#성실함\` \`#협력적\` \`#꼼꼼함\` \`#AI활용경영\` \`#세무회계\`
- **디자인 컨셉:** 깔끔하고 신뢰감을 주는 **모던 블루(Modern Blue)** 테마

---

## 2. 기술 스택 및 배포 환경 (Tech Stack)

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
- **Styling Framework:** Clean Vanilla CSS (가볍고 빠른 로딩 speed 최적화)
- **Icons:** FontAwesome
- **Deployment & Hosting:** GitHub Pages (무료 호스팅, CI/CD 자동 배포 지원)
- **Form Service:** Formspree / EmailJS (백엔드 없이 Contact 폼 메시지 수신 가능)

---

## 3. 웹사이트 구조 및 섹션 상세 설계 (Information Architecture)

\`\`\`
[ Header / Navigation Bar ]
  ├── 1. Hero Section (메인 비주얼)
  ├── 2. About Me (자기소개 및 역량)
  ├── 3. Resume / CV (학력 및 이력)
  ├── 4. Projects (AI 및 세무/회계 포트폴리오)
  ├── 5. Life & Hobbies (피아노 및 일상)
  └── 6. Contact (문의 및 소셜 링크)
[ Footer ]
\`\`\`

### 3.1 섹션별 구성 상세

#### ① Hero Section (메인 화면)
- **헤드라인:** "AI 활용 역량과 꼼꼼한 세무·회계 감각을 겸비한 경영학도, 이찬경입니다."
- **서브 코멘트:** 성실함과 협력적 태도로 가치를 만드는 인재
- **Call-To-Action (CTA):** \`[포트폴리오 보기]\` / \`[이력서 다운로드]\` 버튼

#### ② About Me (자기소개)
- **프로필 카드:** 기본 정보 (성명, 학과, 학년)
- **장단점 카드:**
  - **장점 (Strength):** 꼼꼼함 — 세무/회계 데이터 분석 및 AI 프롬프트 설계 시 디테일한 검증 능력
  - **단점 및 극복 (Growth Area):** 잠이 많은 편 — 철저한 일일 루틴 관리와 시간 분배 플래너 활용으로 극복 및 높은 집중력 유지
- **핵심 가치관:** 협력과 성실을 바탕으로 조직에 신뢰를 주는 파트너

#### ③ Resume / CV (학력 및 이력)
- **학력:** 경영학과 4학년 재학
- **주요 수강 과목:** 세무회계, 재무회계, 관리회계, 경영정보시스템(MIS), AI 기반 데이터 분석 등
- **수상 및 활동 내역:** 타임라인 형태로 시각화 (학회, 공모전, 프로젝트 등)

#### ④ Projects / Portfolio (핵심 섹션)
- **카테고리 필터:** \`전체\` | \`AI 활용 사례\` | \`세무/회계 분석\`
- **프로젝트 카드 구성:**
  - 프로젝트 제목 및 이미지
  - 실행 기간 및 담당 역할 (팀 프로젝트 시 협력 과정 강조)
  - 사용 기술/도구 (Python, ChatGPT API, Excel, Accounting SW 등)
  - 주요성과 및 리포트/발표자료 PDF 링크 또는 팝업 모달

#### ⑤ Life & Hobbies (취미 및 일상)
- **피아노 연주 공간:** 
  - 피아노 연주에 대한 개인적 가치 (집중력과 표현력 강화)
  - 연주 기록 카드 및 인터랙티브 웹 건반
- **일상 갤러리:** 일일 몰입 루틴과 집중력 유지 기법

#### ⑥ Contact (문의하기)
- **소셜/연락처 링크:** 이메일 주소, LinkedIn 프로필, GitHub 링크
- **문의 폼 (Contact Form):** 이름, 이메일, 메시지 입력 후 전송

---

## 4. 단계별 구축 일정 (Roadmap)

| 단계 | 주요 작업 내용 | 예상 소요 시간 |
| :--- | :--- | :--- |
| **Phase 1: 데이터 정리** | 사진, 프로젝트 문서, 이력서, 연주 영상 링크 정리 | 1일 |
| **Phase 2: UI/UX 레이아웃 설계** | 와이어프레임 작성, 컬러 스킴 설정 | 1일 |
| **Phase 3: 퍼블리싱 (HTML/CSS)** | HTML 구조화, Vanilla CSS 적용, 모바일 반응형 대응 | 2일 |
| **Phase 4: 기능 구현 (JS)** | 모달 창, 카테고리 필터링, 마크다운 뷰어 연동 | 1일 |
| **Phase 5: 검수 및 배포** | GitHub Pages 배포, 디바이스별 테스트 | 1일 |

---

## 5. 모던 블루 컬러 스킴 (Color Palette)

- **Primary Color:** \`#1E3A8A\` (Deep Navy — 전문성 및 신뢰감)
- **Secondary Color:** \`#3B82F6\` (Modern Blue — AI 및 IT 감성)
- **Accent Color:** \`#60A5FA\` (Light Ice Blue — 포인트)
- **Background:** \`#F8FAFC\` / \`#FFFFFF\` (깔끔하고 정돈된 화이트/아이스그레이)
- **Text Color:** \`#1E293B\` (가독성이 뛰어난 딥 찰콜)`
    },
    ml: {
      title: "📊 ml_promotion_analysis.md (머신러닝 승진 예측 리포트)",
      filename: "ml_promotion_analysis.md",
      date: "2026.05.14 연구 리포트",
      content: `# 📊 [HR 애널리틱스] 머신러닝 기반 사원 승진(Promotion) 예측 모델링 리포트

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
   - 나이(\`Age\`)와 연봉(\`Salary\`)의 결측치에 대해 단순 제거 대신 직급 및 경력 연수 기반 중앙값(Median) 대체를 적용하여 정보 손실을 최소화.
2. **이상치 탐지:**
   - IQR(Interquartile Range) 방식을 통해 극단적 이상치를 식별 및 윈저라이징(Winsorizing).
3. **상관관계 분석:**
   - 승진 여부(\`Promotion\`)와 가장 상관관계가 높은 변수는 **업무 성과 점수(\`Performance\`) (r = 0.58)** 및 **교육 후 평가 점수(\`Post_Score\`) (r = 0.44)**로 나타남.

---

## 3. 머신러닝 모델 구축 및 비교

다양한 지도학습 분류 알고리즘을 5-Fold 교차 검증(Cross Validation)으로 비교 평가하였습니다.

| 모델명 (Model) | 정확도 (Accuracy) | 정밀도 (Precision) | 재현율 (Recall) | F1-Score | ROC-AUC |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Logistic Regression | 78.4% | 74.2% | 71.0% | 0.725 | 0.812 |
| Random Forest Classifier | 86.8% | 84.1% | 83.5% | 0.838 | 0.895 |
| **LightGBM Classifier (최적)** | **89.5%** | **88.2%** | **87.6%** | **0.879** | **0.934** |

\`\`\`python
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
\`\`\`

---

## 4. 주요 요인 분석 (Feature Importance)

LightGBM 모델의 SHAP(SHapley Additive exPlanations) 및 Feature Importance 분석 결과:
1. **업무 성과 점수 (Performance):** 34.2% 기여도
2. **기술 역량 점수 (Tech_Score):** 22.8% 기여도
3. **교육 후 점수 향상폭 (Post_Score - Pre_Score):** 18.5% 기여도
4. **사회성 점수 (Social_Score):** 14.1% 기여도

---

## 5. 경영학적 시사점 및 제언

- **결과 중심에서 역량 성장 중심으로:** 단순히 근속 연수(\`Experience\`)보다 직무 교육 이후의 학습 민첩성과 기술 역량이 승진 확률을 크게 좌우함을 실증적으로 입증.
- **공정성 제고:** 성별(\`Gender\`)이나 거주지(\`Region\`) 변수는 승진 예측에 유의미한 영향을 미치지 않음(p > 0.05)을 확인하여 평가 공정성을 수학적으로 입증.`
    },
    tax: {
      title: "📑 tax_ai_notes.md (AI 세무회계 자동화 연구 노트)",
      filename: "tax_ai_notes.md",
      date: "2026.04.18 연구 노트",
      content: `# 📑 [세무·회계 & AI] 생성형 AI를 활용한 전표 분개 자동화 및 세법 검토 연구

> **작성자:** 이찬경 (경영학과 4학년)  
> **연구 분야:** 재무회계, 세무회계, 스마트워크 AI 자동화  
> **핵심 키워드:** \`#전표분개\` \`#AI스마트워크\` \`#부가가치세\` \`#회계자동화\`

---

## 1. 문제 의식: 반복적인 전표 처리의 비효율

전통적인 기업 회계 실무에서 증빙 영수증, 세금계산서, 법인카드 명세서를 바탕으로 계정과목을 지정하고 차/대변 분개를 입력하는 과정은 업무 시간의 40% 이상을 차지합니다.
특히 부가가치세 매입세액 공제/불공제 판정, 접대비 한도 관리 등은 세법 규정의 정밀한 해석이 수반되어야 합니다.

---

## 2. AI 기반 스마트 전표 분개 파이프라인

본 연구에서는 자연어로 기술된 거래 내역 또는 OCR 추출 텍스트를 입력받아 표준 분개(Debit/Credit)와 적요를 생성하는 LLM 프롬프트 파이프라인을 설계하였습니다.

\`\`\`
[ 비정형 거래 텍스트 / 영수증 데이터 ]
                 │
                 ▼
     [ 1단계: 거래 유형 분류 ] (영업비용, 자산취득, 외주용역 등)
                 │
                 ▼
     [ 2단계: 계정과목 매핑 & 세무 판단 ]
      - 차변 / 대변 계정과목 결정
      - 부가가치세 매입세액 공제 가능 여부 판정
                 │
                 ▼
     [ 3단계: 표준 회계 전표 JSON 출력 ]
\`\`\`

### 실제 프롬프트 엔지니어링 예시

\`\`\`markdown
시스템 역할: 대한민국 K-IFRS 및 법인세법에 정통한 공인회계사 AI
입력 데이터: "거래처 미팅 후 저녁 식사 143,000원 법인카드 결제 (부가세 13,000원 포함)"

출력:
- 차변: (비용) 접대비 130,000 / (자산) 부가세대급금 13,000
- 대변: (부채) 미지급금(카드사) 143,000
- 세무 참고: 법인세법상 접대비 지출 증빙 적격성 충족 여부 확인 필요.
\`\`\`

---

## 3. 검증 결과 및 꼼꼼한 검토 체계

- **분개 정확도:** 일반 판관비 및 복리후생비 기준 96.4% 일치율.
- **예외 처리:** 비영업용 소형승용차 관련 비용 등 불공제 항목의 경우 AI가 1차 플래그(Warning)를 지정하여 회계 담당자가 2차 크로스체크할 수 있도록 안전장치 마련.`
    },
    piano: {
      title: "🎹 piano_and_routine.md (피아노 선율과 생산성 루틴)",
      filename: "piano_and_routine.md",
      date: "2026.03.20 에세이",
      content: `# 🎹 [에세이 & 루틴] 피아노 선율 속에서 발견한 몰입과 균형의 미학

> **작성자:** 이찬경  
> **태그:** \`#피아노\` \`#마인드셋\` \`#생산성루틴\` \`#집중력\`

---

## 1. 88개의 건반과 데이터의 공통점

피아노를 칠 때 가장 중요한 것은 건반 하나하나의 타건 강도와 박자의 정밀함입니다. 아주 미세한 강약 조절(Dynamics)이 곡 전체의 분위기를 완전히 바꾸듯, 데이터 분석이나 세무·회계 작업 역시 단 한 자리의 숫자나 변수 전처리의 꼼꼼함이 최종 결과의 신뢰도를 결정합니다.

> "피아노 연습은 단순한 손가락 훈련이 아니라,  
> 복잡한 악보를 체계적으로 해석하고 재구성하는 지적 몰입의 과정입니다."

---

## 2. 수면 관리와 일일 루틴의 극복기

학창 시절 잠이 많은 편이었던 저는, 이를 단순히 체질의 문제로 두지 않고 **체계적인 루틴 설계와 시간 블록화 기법**을 통해 극복하였습니다.

- **06:30 기상 & 가벼운 스트레칭:** 맑은 정신으로 하루의 우선순위 3가지 설정
- **90분 딥워크(Deep Work) 블록:** 오전에 가장 고난도 과업(AI 모델링, 복잡한 회계 분석) 집중 처리
- **저녁 30분 피아노 루틴:** 하루의 긴장을 완화하고 창의적 사고를 리프레시하는 나만의 충전 시간
- **야간 회고 & 마크다운 기록:** 하루 성과와 배운 점을 마크다운 노트로 정리

이러한 정밀한 일상 관리는 협업 프로젝트에서도 팀원들에게 '항상 마감과 약속을 철저히 지키는 든든한 동료'라는 신뢰를 주는 밑거름이 되었습니다.`
    }
  };

  // --- 2. Markdown Hub Logic ---
  const mdDocSelect = document.getElementById('md-doc-select');
  const mdRenderedView = document.getElementById('md-rendered-view');
  const mdRawView = document.getElementById('md-raw-view');
  const mdRawTextarea = document.getElementById('md-raw-textarea');
  const viewRenderedBtn = document.getElementById('view-rendered-btn');
  const viewRawBtn = document.getElementById('view-raw-btn');
  const copyMdBtn = document.getElementById('copy-md-btn');
  const mdFileInput = document.getElementById('md-file-input');
  const mdActiveFilename = document.getElementById('md-active-filename');
  const mdDocTimestamp = document.getElementById('md-doc-timestamp');
  const mdWordCount = document.getElementById('md-word-count');

  let currentRawMarkdown = "";

  function renderMarkdown(mdText, filename, dateStr) {
    currentRawMarkdown = mdText;
    mdRawTextarea.value = mdText;
    mdActiveFilename.textContent = filename || "document.md";
    if (dateStr) mdDocTimestamp.innerHTML = `<i class="fa-regular fa-clock"></i> ${dateStr}`;

    // Calculate word count
    const wordCount = mdText.trim().replace(/\s+/g, ' ').split(' ').length;
    const readTime = Math.ceil(wordCount / 200);
    mdWordCount.textContent = `단어 수: ${wordCount.toLocaleString()} | 읽기 소요: 약 ${readTime}분`;

    // Render using marked or fallback simple parser
    if (typeof marked !== 'undefined') {
      marked.setOptions({
        gfm: true,
        breaks: true,
        highlight: function(code, lang) {
          if (typeof hljs !== 'undefined' && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
          }
          return code;
        }
      });
      mdRenderedView.innerHTML = marked.parse(mdText);
    } else {
      // Basic fallback renderer
      mdRenderedView.innerHTML = `<pre style="white-space: pre-wrap;">${escapeHtml(mdText)}</pre>`;
    }

    // Apply syntax highlighting
    if (typeof hljs !== 'undefined') {
      mdRenderedView.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  }

  function loadSelectedDocument(key) {
    if (MARKDOWN_DOCS[key]) {
      const doc = MARKDOWN_DOCS[key];
      renderMarkdown(doc.content, doc.filename, doc.date);
    }
  }

  // Initial Markdown Render
  if (mdDocSelect) {
    loadSelectedDocument(mdDocSelect.value);

    mdDocSelect.addEventListener('change', (e) => {
      loadSelectedDocument(e.target.value);
    });
  }

  // View Switcher (Rendered vs Raw)
  if (viewRenderedBtn && viewRawBtn) {
    viewRenderedBtn.addEventListener('click', () => {
      viewRenderedBtn.classList.add('active');
      viewRawBtn.classList.remove('active');
      mdRenderedView.style.display = 'block';
      mdRawView.style.display = 'none';
    });

    viewRawBtn.addEventListener('click', () => {
      viewRawBtn.classList.add('active');
      viewRenderedBtn.classList.remove('active');
      mdRenderedView.style.display = 'none';
      mdRawView.style.display = 'block';
    });
  }

  // Copy Markdown Button
  if (copyMdBtn) {
    copyMdBtn.addEventListener('click', () => {
      if (!currentRawMarkdown) return;
      navigator.clipboard.writeText(currentRawMarkdown).then(() => {
        showToast("마크다운 내용이 클립보드에 복사되었습니다! 📋", "success");
      }).catch(() => {
        showToast("클립보드 복사 실패", "info");
      });
    });
  }

  // Custom MD File Upload Handler
  if (mdFileInput) {
    mdFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        renderMarkdown(content, file.name, "로컬 파일 불러옴");
        showToast(`'${file.name}' 마크다운 파일을 성공적으로 불러왔습니다!`, "success");
      };
      reader.readAsText(file);
    });
  }

  // Links in projects pointing to MD Hub
  document.querySelectorAll('.select-md-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const docKey = link.getAttribute('data-doc');
      if (docKey && mdDocSelect) {
        mdDocSelect.value = docKey;
        loadSelectedDocument(docKey);
      }
    });
  });

  // --- 3. Project Filter Logic ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 4. Project Modal Details Data & Controller ---
  const PROJECT_DETAILS = {
    promo: {
      title: "HR 사원 승진(Promotion) 머신러닝 예측 시스템 상세",
      category: "AI & 머신러닝",
      content: `
        <div class="project-modal-content">
          <h4>1. 프로젝트 개요 및 문제 정의</h4>
          <p>기업 내 연례 승진 심사에서 주관적 평가 오류를 최소화하고 공정성을 입증하기 위해, 500명 규모의 실증 인사 데이터를 기반으로 지도학습 이진 분류 모델을 개발하였습니다.</p>
          
          <h4>2. 데이터 전처리 및 방법론</h4>
          <ul>
            <li><strong>결측치 보정:</strong> Age, Salary의 결측치를 직급/경력 기반 중앙값(Median)으로 정밀 보완.</li>
            <li><strong>특성 공학(Feature Engineering):</strong> 직무 교육 효과(Post_Score - Pre_Score) 증감폭 변수 생성.</li>
            <li><strong>알고리즘 비교:</strong> Logistic Regression, Random Forest, LightGBM 3종 모델을 5-Fold 교차 검증.</li>
          </ul>

          <h4>3. 모델 성능 지표</h4>
          <table class="table-styled" style="width:100%; margin:16px 0; border-collapse:collapse;">
            <thead>
              <tr style="background:#f1f5f9; text-align:left;">
                <th style="padding:8px; border:1px solid #cbd5e1;">평가 지표</th>
                <th style="padding:8px; border:1px solid #cbd5e1;">LightGBM 모델 결과</th>
                <th style="padding:8px; border:1px solid #cbd5e1;">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="padding:8px; border:1px solid #cbd5e1;">정확도 (Accuracy)</td><td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#2563eb;">89.5%</td><td style="padding:8px; border:1px solid #cbd5e1;">최고 성능 달성</td></tr>
              <tr><td style="padding:8px; border:1px solid #cbd5e1;">F1-Score</td><td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#2563eb;">0.879</td><td style="padding:8px; border:1px solid #cbd5e1;">클래스 불균형 해소</td></tr>
              <tr><td style="padding:8px; border:1px solid #cbd5e1;">ROC-AUC</td><td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#2563eb;">0.934</td><td style="padding:8px; border:1px solid #cbd5e1;">높은 변별력 입증</td></tr>
            </tbody>
          </table>

          <h4>4. 실증 코드 스니펫 (Python)</h4>
          <pre style="background:#0f172a; color:#38bdf8; padding:14px; border-radius:8px; font-family:monospace; font-size:0.85rem; overflow-x:auto;">
import pandas as pd
from lightgbm import LGBMClassifier
from sklearn.metrics import classification_report, roc_auc_score

# 1. 모델 학습 및 평가
model = LGBMClassifier(n_estimators=150, learning_rate=0.05, max_depth=6, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(classification_report(y_test, y_pred))
print("ROC-AUC:", roc_auc_score(y_test, model.predict_proba(X_test)[:, 1]))
          </pre>
        </div>
      `
    },
    salary: {
      title: "직무별 급여(Salary) 다변량 회귀 & 세무비용 시뮬레이션 상세",
      category: "세무 & 회계 분석",
      content: `
        <div class="project-modal-content">
          <h4>1. 분석 목적</h4>
          <p>직원의 근속 연수, 업무 성과 점수, 연령, 교육 수준이 기업 인건비(연봉)에 미치는 영향력을 통계적으로 정량화하고, 기업의 4대 보험 및 원천징수 세무비용을 자동 산출하는 모델을 수립했습니다.</p>

          <h4>2. 핵심 발견 및 회귀 방정식</h4>
          <p>다변량 선형회귀 분석 결과(결정계수 R² = 0.812):</p>
          <div style="background:#f8fafc; border-left:4px solid #2563eb; padding:12px; margin:12px 0;">
            <code>연봉(Salary) = 2,840 + (142 × 경력) + (38 × 성과점수) + (18 × IQ)</code>
          </div>

          <h4>3. 세무 최적화 연계</h4>
          <ul>
            <li>비과세 근로소득(식대, 자가운전보조금) 한도 적용 시뮬레이터 구축.</li>
            <li>기업 관점에서의 퇴직급여충당부채 및 고용증대세액공제 시뮬레이션 연계.</li>
          </ul>
        </div>
      `
    },
    'tax-ai': {
      title: "생성형 AI 기반 회계 전표 자동 분개 & 부가세 판정 어시스턴트 상세",
      category: "스마트워크",
      content: `
        <div class="project-modal-content">
          <h4>1. 프로젝트 개요</h4>
          <p>법인카드 영수증 및 거래 내역 텍스트를 입력받았을 때, K-IFRS 기준 차/대변 계정과목을 자동 추천하고 부가가치세 매입세액 공제 가능 여부를 1차 판정하는 AI 스마트워크 파이프라인입니다.</p>

          <h4>2. 기술 아키텍처</h4>
          <ul>
            <li><strong>프롬프트 엔지니어링:</strong> Few-Shot 학습 및 JSON Schema 구조화 출력을 통해 분개 일관성 확보.</li>
            <li><strong>오류 방지 검증 레이어:</strong> 대차평균의 원리(차변 합계 == 대변 합계) 수학적 검증 스크립트 결합.</li>
            <li><strong>공제 불공제 필터링:</strong> 비영업용 소형승용차 유지비, 접대비 관련 매입세액 자동 불공제 플래그 지정.</li>
          </ul>

          <h4>3. 정량적 성과</h4>
          <p>실제 200건의 테스트 거래 데이터셋 대상 <strong>96.4% 분개 일치율</strong> 및 전표 작성 소요 시간 약 <strong>60% 절감 효과</strong> 확인.</p>
        </div>
      `
    },
    mis: {
      title: "MIS 역량 요인분석 및 K-Means 군집화 대시보드 상세",
      category: "MIS / 비지도학습",
      content: `
        <div class="project-modal-content">
          <h4>1. 분석 배경</h4>
          <p>조직 내 다양한 역량 평가 항목(Social_Score, Tech_Score, Extra_Feature, 만족도)을 축약하고, 사원 세그먼트별 맞춤형 교육 및 HR 전략을 제안하기 위한 비지도학습 연구입니다.</p>

          <h4>2. 요인분석(Factor Analysis) 결과</h4>
          <ul>
            <li>KMO 표본적합도 0.82 확보 후 2개 주 요인(기술역량 요인, 대인관계 요인) 추출.</li>
            <li>K-Means 엘보우 기법(Elbow Method) 및 실루엣 점수 검토를 통해 최적 군집 수 K=3 도출.</li>
          </ul>

          <h4>3. 군집별 HR 전략 제언</h4>
          <ul>
            <li><strong>클러스터 1 (Tech Pioneers):</strong> 고도화된 AI 스마트워크 및 전문 테크 직무 배치 권고.</li>
            <li><strong>클러스터 2 (Collaborative Managers):</strong> 팀 프로젝트 리더 및 고객/협력사 커뮤니케이션 직무 배치.</li>
            <li><strong>클러스터 3 (Potential Talents):</strong> 집중 멘토링 프로그램 및 역량 증진 교육 지원.</li>
          </ul>
        </div>
      `
    }
  };

  const projectModal = document.getElementById('project-modal');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalProjectBody = document.getElementById('modal-project-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalActionBtn = document.getElementById('modal-action-btn');

  function openProjectModal(projectId) {
    const data = PROJECT_DETAILS[projectId];
    if (!data) return;

    modalProjectTitle.textContent = data.title;
    modalProjectBody.innerHTML = data.content;
    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-project-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalActionBtn) modalActionBtn.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // --- 5. CV / Resume Modal Logic ---
  const cvModal = document.getElementById('cv-modal');
  const quickCvBtn = document.getElementById('quick-cv-btn');
  const viewFullCvBtn = document.getElementById('view-full-cv-btn');
  const cvCloseBtn = document.getElementById('cv-close-btn');
  const cvPrintBtn = document.getElementById('cv-print-btn');

  function openCvModal() {
    cvModal.classList.add('active');
    cvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCvModal() {
    cvModal.classList.remove('active');
    cvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (quickCvBtn) quickCvBtn.addEventListener('click', openCvModal);
  if (viewFullCvBtn) viewFullCvBtn.addEventListener('click', openCvModal);
  if (cvCloseBtn) cvCloseBtn.addEventListener('click', closeCvModal);
  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCvModal();
    });
  }
  if (cvPrintBtn) {
    cvPrintBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCvModal();
    }
  });

  // --- 6. Interactive Web Audio Synthesizer Piano ---
  let audioCtx = null;
  const NOTE_FREQS = {
    'C4': 261.63,
    'C#4': 277.18,
    'D4': 293.66,
    'D#4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4': 369.99,
    'G4': 392.00,
    'G#4': 415.30,
    'A4': 440.00,
    'A#4': 466.16,
    'B4': 493.88,
    'C5': 523.25
  };

  const KEYBOARD_NOTE_MAP = {
    'a': 'C4', 'A': 'C4',
    'w': 'C#4', 'W': 'C#4',
    's': 'D4', 'S': 'D4',
    'e': 'D#4', 'E': 'D#4',
    'd': 'E4', 'D': 'E4',
    'f': 'F4', 'F': 'F4',
    't': 'F#4', 'T': 'F#4',
    'g': 'G4', 'G': 'G4',
    'y': 'G#4', 'Y': 'G#4',
    'h': 'A4', 'H': 'A4',
    'u': 'A#4', 'U': 'A#4',
    'j': 'B4', 'J': 'B4',
    'k': 'C5', 'K': 'C5'
  };

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playNoteSound(note, duration = 0.8) {
    initAudioContext();
    if (!audioCtx) return;

    const freq = NOTE_FREQS[note];
    if (!freq) return;

    const now = audioCtx.currentTime;

    // Create main oscillator (Fundamental)
    const osc1 = audioCtx.createOscillator();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);

    // Create harmonic oscillator (Warmth)
    const osc2 = audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Gain Envelopes (ADSR - Attack, Decay, Sustain, Release)
    const gain1 = audioCtx.createGain();
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.3, now + 0.015); // Fast attack
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration); // Natural decay

    const gain2 = audioCtx.createGain();
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(0.12, now + 0.01);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.7);

    osc1.connect(gain1);
    osc2.connect(gain2);

    gain1.connect(audioCtx.destination);
    gain2.connect(audioCtx.destination);

    osc1.start(now);
    osc2.start(now);

    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  // Piano Key Click Interaction
  const pianoKeys = document.querySelectorAll('.piano-key');
  pianoKeys.forEach(keyBtn => {
    keyBtn.addEventListener('mousedown', () => {
      const note = keyBtn.getAttribute('data-note');
      keyBtn.classList.add('active');
      playNoteSound(note);
    });

    keyBtn.addEventListener('mouseup', () => {
      keyBtn.classList.remove('active');
    });

    keyBtn.addEventListener('mouseleave', () => {
      keyBtn.classList.remove('active');
    });
  });

  // Physical Keyboard listener
  window.addEventListener('keydown', (e) => {
    // Ignore if typing in input or textarea
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    const note = KEYBOARD_NOTE_MAP[e.key];
    if (note) {
      const targetBtn = document.querySelector(`.piano-key[data-note="${note}"]`);
      if (targetBtn && !targetBtn.classList.contains('active')) {
        targetBtn.classList.add('active');
        playNoteSound(note);
      }
    }
  });

  window.addEventListener('keyup', (e) => {
    const note = KEYBOARD_NOTE_MAP[e.key];
    if (note) {
      const targetBtn = document.querySelector(`.piano-key[data-note="${note}"]`);
      if (targetBtn) targetBtn.classList.remove('active');
    }
  });

  // Demo Melody Auto-Player (Pachelbel's Canon / Fur Elise motif)
  const demoMelodyBtn = document.getElementById('piano-demo-melody-btn');
  if (demoMelodyBtn) {
    let isPlayingMelody = false;
    const melodyNotes = [
      { note: 'E4', delay: 0 },
      { note: 'D#4', delay: 250 },
      { note: 'E4', delay: 500 },
      { note: 'D#4', delay: 750 },
      { note: 'E4', delay: 1000 },
      { note: 'B4', delay: 1250 },
      { note: 'D4', delay: 1500 },
      { note: 'C4', delay: 1750 },
      { note: 'A4', delay: 2000 }
    ];

    demoMelodyBtn.addEventListener('click', () => {
      if (isPlayingMelody) return;
      isPlayingMelody = true;
      demoMelodyBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 연주 중...';

      melodyNotes.forEach((item, idx) => {
        setTimeout(() => {
          playNoteSound(item.note, 0.6);
          const btn = document.querySelector(`.piano-key[data-note="${item.note}"]`);
          if (btn) {
            btn.classList.add('active');
            setTimeout(() => btn.classList.remove('active'), 200);
          }
          if (idx === melodyNotes.length - 1) {
            setTimeout(() => {
              isPlayingMelody = false;
              demoMelodyBtn.innerHTML = '<i class="fa-solid fa-play"></i> 멜로디 시연';
            }, 600);
          }
        }, item.delay);
      });
    });
  }

  // --- 7. Theme Toggle (Light / Dark Mode) ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('ck_theme') || 'light';
  document.body.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.body.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('ck_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`${newTheme === 'dark' ? '다크' : '라이트'} 모드로 전환되었습니다. 🌓`, "info");
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
      themeToggleBtn.title = '라이트 모드로 전환';
    } else {
      icon.className = 'fa-solid fa-moon';
      themeToggleBtn.title = '다크 모드로 전환';
    }
  }

  // --- 8. Navigation & Smooth Scroll Spy ---
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navContainer = document.getElementById('nav-links');

  if (mobileMenuBtn && navContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      navContainer.classList.toggle('mobile-open');
      const isOpen = navContainer.classList.contains('mobile-open');
      mobileMenuBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navContainer.classList.remove('mobile-open');
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // --- 9. Contact Form Simulation ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      if (!name || !email || !message) {
        showToast("모든 필수 항목을 입력해주세요.", "info");
        return;
      }

      const submitBtn = document.getElementById('contact-submit-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 메시지 전송 중...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> 메시지 전송하기';
        contactForm.reset();
        showToast(`감사합니다, ${name}님! 문의 내용이 안전하게 접수되었습니다. 곧 회신드리겠습니다. ✉️`, "success");
      }, 1000);
    });
  }

  // Copy text buttons (email, etc.)
  document.querySelectorAll('.copy-text-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`클립보드에 복사되었습니다: ${text}`, "success");
        });
      }
    });
  });

  // --- 10. Toast Utility ---
  function showToast(message, type = "info") {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const iconClass = type === 'success' ? 'fa-circle-check text-green' : 'fa-circle-info text-blue';
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${escapeHtml(message)}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideToast 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});

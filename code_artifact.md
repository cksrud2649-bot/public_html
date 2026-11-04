# 🌐 이찬경(Lee Chan-kyung) 개인 웹사이트 구축 계획서

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
- **핵심 키워드:** `#성실함` `#협력적` `#꼼꼼함` `#AI활용경영` `#세무회계`
- **디자인 컨셉:** 깔끔하고 신뢰감을 주는 **모던 블루(Modern Blue)** 테마

---

## 2. 기술 스택 및 배포 환경 (Tech Stack)

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
- **Styling Framework:** Tailwind CSS (CDN 활용) 또는 Clean Vanilla CSS (가볍고 빠른 로딩 speed 최적화)
- **Icons:** FontAwesome / Lucide Icons
- **Deployment & Hosting:** GitHub Pages (무료 호스팅, CI/CD 자동 배포 지원)
- **Form Service:** Formspree / EmailJS (백엔드 없이 Contact 폼 메시지 수신 가능)

---

## 3. 웹사이트 구조 및 섹션 상세 설계 (Information Architecture)

웹사이트는 단일 페이지(Single Page Application) 형태로 구상하되, 상단 네비게이션 바(Navigation Bar)를 통해 각 섹션으로 smooth scroll 이동이 가능하도록 설계합니다.

```
[ Header / Navigation Bar ]
  ├── 1. Hero Section (메인 비주얼)
  ├── 2. About Me (자기소개 및 역량)
  ├── 3. Resume / CV (학력 및 이력)
  ├── 4. Projects (AI 및 세무/회계 포트폴리오)
  ├── 5. Life & Hobbies (피아노 및 일상)
  └── 6. Contact (문의 및 소셜 링크)
[ Footer ]
```

### 3.1 섹션별 구성 상세

#### ① Hero Section (메인 화면)
- **헤드라인:** "AI 활용 역량과 꼼꼼한 세무·회계 감각을 겸비한 경영학도, 이찬경입니다."
- **서브 코멘트:** 성실함과 협력적 태도로 가치를 만드는 인재
- **Call-To-Action (CTA):** `[포트폴리오 보기]` / `[이력서 다운로드]` 버튼

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
- **카테고리 필터:** `전체` | `AI 활용 사례` | `세무/회계 분석`
- **프로젝트 카드 구성:**
  - 프로젝트 제목 및 이미지
  - 실행 기간 및 담당 역할 (팀 프로젝트 시 협력 과정 강조)
  - 사용 기술/도구 (Python, ChatGPT API, Excel, Accounting SW 등)
  - 주요성과 및 리포트/발표자료 PDF 링크 또는 팝업 모달

#### ⑤ Life & Hobbies (취미 및 일상)
- **피아노 연주 공간:** 
  - 피아노 연주에 대한 개인적 가치 (집중력과 표현력 강화)
  - 연주 기록 카키/갤러리 카드
  - YouTube/Vimeo 연주 영상 임베드 링크
- **일상 갤러리:** 3-4장의 감성적인 일상 사진 및 간단한 캡션

#### ⑥ Contact (문의하기)
- **소셜/연락처 링크:** 이메일 주소, LinkedIn 프로필, GitHub/블로그 링크
- **문의 폼 (Contact Form):** 이름, 이메일, 메시지 입력 후 전송 버튼 (Formspree 연동)

---

## 4. 단계별 구축 일정 (Roadmap)

| 단계 | 주요 작업 내용 | 예상 소요 시간 |
| :--- | :--- | :--- |
| **Phase 1: 데이터 정리** | 사진, 프로젝트 문서, 이력서, 연주 영상 링크 정리 | 1일 |
| **Phase 2: UI/UX 레이아웃 설계** | 와이어프레임 작성, 컬러 스킴(Deep Navy & Sky Blue) 설정 | 1일 |
| **Phase 3: 퍼블리싱 (HTML/CSS)** | HTML 구조화, Tailwind CSS 적용, 모바일 반응형 대응 | 2일 |
| **Phase 4: 기능 구현 (JS)** | 모달 창, 카테고리 필터링, Formspree 폼 연동, 스크롤 애니메이션 | 1일 |
| **Phase 5: 검수 및 배포** | GitHub Repositories 생성, GitHub Pages 배포, 디바이스별 테스트 | 1일 |

---

## 5. 모던 블루 컬러 스킴 (Color Palette)

- **Primary Color:** `#1E3A8A` (Deep Navy — 전문성 및 신뢰감)
- **Secondary Color:** `#3B82F6` (Modern Blue — AI 및 IT 감성)
- **Accent Color:** `#60A5FA` (Light Ice Blue — 포인트)
- **Background:** `#F8FAFC` / `#FFFFFF` (깔끔하고 정돈된 화이트/아이스그레이)
- **Text Color:** `#1E293B` (가독성이 뛰어난 딥 찰콜)

---

## 6. 향후 확장 및 유지보수 계획
1. **블로그 기능 확장:** AI 세무/회계 동향 관련 포스팅 작성 공간 추가
2. **다국어 지원:** 영문 프로필 페이지 추가를 통한 글로벌 역량 어필
3. **SEO 최적화:** 네이버/구글 검색 엔진 등록 및 Open Graph 태그 설정
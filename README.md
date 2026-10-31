# 학습자료 공유 서비스

고등학교 1학년 학습자료(PDF)를 등록하고 과목·단원·자료 유형별로 검색·열람하는 웹서비스입니다.

## 배포 주소

https://learning-material-five.vercel.app/

## 구현 기능

- 홈에서 자료 등록 및 자료 탐색 페이지로 이동
- Supabase Auth를 이용한 이메일 회원가입·로그인·로그아웃
- **로그인한 사용자만** 학습자료 및 PDF 등록
- 제목·설명·과목·단원·자료 유형·태그 입력 및 필수 항목 검사
- 과목에 따라 단원 목록 자동 변경
- PDF 형식 및 최대 10MB 파일 크기 검사, 업로드 전 미리보기
- Supabase Storage의 `material-pdfs` 버킷에 실제 PDF 저장
- Supabase Database의 `public.materials` 테이블에 자료 정보 저장
- **로그인 없이 누구나** 검색어·과목·단원·자료 유형으로 검색, 정렬, PDF 열람
- GitHub 저장소 변경 사항을 Vercel로 배포

## 파일 구성

- `index.html`: 홈
- `register.html`: 이메일 로그인 및 PDF 자료 등록
- `search.html`: 등록 자료 검색 및 PDF 열람
- `style.css`: 공통 스타일
- `data.js`: 과목·단원·자료 유형 데이터와 공통 함수
- `supabase-config.js`: Supabase 공개 연결 정보 (publishable key)

## 사용 방법

1. [배포된 웹사이트](https://learning-material-five.vercel.app/)를 엽니다.
2. **자료 등록하기**에서 이메일 회원가입 및 로그인을 진행합니다. 이메일 인증이 필요한 경우 인증 후 로그인합니다.
3. 제목·과목·단원·자료 유형을 입력하고 PDF(10MB 이하)를 선택합니다.
4. PDF 미리보기를 확인하고 **PDF 자료 등록**을 선택합니다.
5. 홈의 **자료 탐색하기**에서 검색어나 필터로 등록한 자료를 찾습니다.
6. 결과의 **PDF 열기**를 선택하면 실제 업로드된 PDF가 새 탭에서 열립니다.

## 데이터 저장과 접근 권한

- **Supabase Database**: 제목, 설명, 과목, 단원, 유형, 태그, PDF 경로 및 등록 정보 저장
- **Supabase Storage**: 실제 PDF 파일 저장
- **공개 읽기**: 자료 목록 조회 및 PDF 열람은 누구나 가능
- **인증된 쓰기**: 이메일 로그인한 사용자만 자료 정보 및 PDF 업로드 가능
- 자료마다 등록자의 사용자 ID를 저장하고, PDF는 사용자 ID별 경로에 업로드합니다.
- 브라우저 코드에는 공개 가능한 Supabase publishable key만 사용하며, 비밀 관리자 키는 사용하지 않습니다.

## 기술 스택

HTML, CSS, JavaScript, Supabase Auth·Database·Storage, GitHub, Vercel

## 구현 및 확인 현황

실제 PDF 업로드 후 Supabase에서 자료 정보 1건과 PDF 파일 1개가 저장된 것을 확인했고, 배포 사이트의 검색 화면에서 PDF가 정상적으로 열리는 것도 확인했습니다.

## 참고 사항

- 저장된 자료 목록은 현재 최신 1,000건까지 불러와 브라우저에서 필터링합니다.
- 현재 별도의 관리자 대시보드, 자료 삭제·수정, 페이지네이션 기능은 구현하지 않았습니다.
- 브라우저에서 `index.html`을 직접 열기보다는 위의 Vercel 배포 주소에서 이용하는 것을 권장합니다.

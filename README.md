### 기술스택

---

언어: TypeScript

라이브러리: React.js

스타일링: scss Module ⇒ [scss 핵심 정리](https://www.heropy.dev/p/Y7OrPe)

패키지 매니저: pnpm

### 라이브러리

---

- [react-router-dom](https://www.heropy.dev/p/9tesDt): 페이지 라우팅을 위한 라이브러리
- [react-hook-form](https://react-hook-form.com/get-started): 비제어 컴포넌트로 폼을 관리하여 성능을 최적화하기 위한 라이브러리
- [zod](https://zod.dev/): 폼 입력값 유효성 검증 라이브러리 주로 react-hook-form과 함께 사용
- [lucide-react](https://lucide.dev/icons/): 여러 아이콘을 쉽게 불러오기 위한 라이브러리
- [Radix UI](https://www.radix-ui.com/): 고품질, 접근 가능한 디자인 시스템과 웹앱을 구축하는 데 사용하는 오픈소스 UI 컴포넌트 라이브러리
- [react-dropzone](https://www.npmjs.com/package/react-dropzone): 파일 드롭다운을 구현하기 위한 라이브러리
- [recharts.js](https://recharts.org/en-US/): 차트형식으로 UI로 보여주기 위한 라이브러리
- [clsx](https://tensdiary.tistory.com/entry/React-clsx-%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%9D%B4%EB%A6%84className%EC%9D%84-%EC%A1%B0%EA%B1%B4%EB%B6%80%EB%A1%9C-%EA%B2%B0%ED%95%A9-%EA%B4%80%EB%A6%AC): className을 여러 개 지정할 때 사용하는 라이브러리
- [zustand](https://zustand-demo.pmnd.rs/): 전역 상태관리 라이브러리 ⇒ [핵심 정리](https://www.heropy.dev/p/HZaKIE) (필수 X)
- [tanstack-query](https://tanstack.com/query/latest/docs/framework/react/installation): 요청 데이터 캐싱하는데 사용 ⇒ [핵심 정리](https://www.heropy.dev/p/HZaKIE) (필수 X)
- [axios](https://www.heropy.dev/p/QOWqjV): http요청 보낼 때 사용할건데 fetch로 충분하면 굳이 안써도 될듯 (필수 X)
- [framer-motion](https://motion.dev/): 애니메이션 css적용하기에 편리함 (필수 X)
- 지도는 아래 리스트 중에서 결정
  - google map api
  - naver map api
  - leaflet
- 번역 api는 아래 리스트 중에서 결정
  - google translation api
  - papago translation api
  - i18n

### 폴더 구조

---

```jsx
 ┣ 📦public
 ┃ ┣ 📂images // 이미지 관리
 ┃ ┗ 📂fonts // 폰트 관리
 ┣ 📦src
 ┃ ┣ 📂components // 컴포넌트 관리
 ┃ ┣ 📂lib // 여러가지 함수, 값 관리
 ┃ ┃ ┣ 📂apis // 요청 관련 함수 관리 ex) 로그인 요청, 게시물 업로드 요청
 ┃ ┃ ┣ 📂constants // 상수 관리
 ┃ ┃ ┣ 📂hooks // 커스텀 훅 관리
 ┃ ┃ ┣ 📂schemas // Form 검증용 스키마 관리
 ┃ ┃ ┣ 📂types // 타입 관리
 ┃ ┃ ┗ 📂utils // 일반 함수 관리
 ┃ ┣ 📂pages // 페이지 관리
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.tsx // 프로젝트 루트 컴포넌트
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.tsx // 프로젝트 루트 컴포넌트
 ┣ 📜.env.local // 환경 변수를 관리하는 파일
 ┣ 📜.gitignore // git에서 제외하기 위한 파일
 ┣ 📜index.html // 루트 html 파일
 ┣ 📜package.json // 현재 프로젝트에 관한 정보와 pnpm을 통해 설치한 모듈들의 의존성을 관리하는 파일
 ┣ 📜pnpm-lock.yaml // pnpm 패키지 잠금 파일
 ┣ 📜tsconfig.json // 각 환경에서 타입스크립트 동작방식에 대한 파일
 ┗ 📜vite.config.json
```

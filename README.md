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
#### 다국어 처리
- [i18next](https://www.i18next.com/): 번역 라이브러리
- [react-i18next](https://react.i18next.com/): React i18next 라이브러리
  <details>
    <summary>다국어 처리 자동화 과정</summary>
    
    1. 번역 리소스 폴더 준비

            public
            └── locales
                ├── en
                │   └── common.json
                └── ko
                    └── common.json
     2. i18n 파일 작성
        
        ```typescript
        // src/i18n/i18n.ts
        import i18n from 'i18next';
        import { initReactI18next } from 'react-i18next';
        
        // JSON을 직접 import (초기 예시)
        import enCommon from '../../public/locales/en/common.json';
        import koCommon from '../../public/locales/ko/common.json';
        
        const resources = {
          en: { common: enCommon },
          ko: { common: koCommon },
        };
        
        i18n
          .use(initReactI18next)
          .init({
            resources,
            lng: 'ko',          // 기본 언어
            fallbackLng: 'en',  // 지원하지 않는 언어 사용 시 대체
            interpolation: {
              escapeValue: false,
            },
          });
        
        export default i18n;
        ```
    3. 최상위 컴포넌트에서 i18n 로드
       ```typescript
         // src/main.tsx
        import React from 'react'
        import ReactDOM from 'react-dom/client'
        import App from './App'
        
        // i18n 초기화
        import './i18n/i18n'
        
        ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        )
       ```
    4. 사용 예시
       ```typescript
         // src/App.tsx
        import React from 'react'
        import { useTranslation } from 'react-i18next'
        
        function App() {
          const { t } = useTranslation('common') // "common" = common.json
        
          return (
            <div>
              <h1>{t('hello')}</h1>
              <p>{t('welcome')}</p>
            </div>
          )
        }
        
        export default App
       ```
       
    - `public/locales/ko/common.json`에 다음과 같이 작성하였다면 `안녕하세요 사이트에 오신 것을 환영합니다!` 를 출력
  
          {
            "hello": "안녕하세요",
            "welcome": "사이트에 오신 것을 환영합니다!"
          }
    5. csv 작성
       ```pgsql
       
       my-vite-react-app
          ├── public
          │   └── locales
          │       ├── en
          │       │   └── common.json
          │       └── ko
          │           └── common.json
          ├── scripts
          │   └── generateTranslations.ts   # CSV → JSON 변환 스크립트
          ├── translations
          │   └── translations.csv          # 번역 원본 CSV
       
        ```
       - `translation/translation.csv` 2개의 언어 예시
       ```csv
        key,ko,en
        hello,안녕하세요,Hello
        welcome,사이트에 오신 것을 환영합니다!,Welcome to our site!
       ```
       - 첫 줄: key, ko, en(번역 키, 한국어, 영어)
       - 이후 줄: 번역 키와 각 언어별 텍스트
    6. 변환 스크립트 작성
       - Node.js 환경에서 CSV를 파싱하기 위해 `csv-parser` 라이브러리 설치
         ```bash
          pnpm add -D csv-parser
          # Dev Dependency로 설치
         ```
       - 이후 `scripts/generateTranslations.js` 작성
         ```javascript
          import { fileURLToPath } from 'url';
          import { dirname, join } from 'path';
          import fs from 'fs';
          import csv from 'csv-parser';
          
          // __filename, __dirname 대신 사용할 수 있는 ESM 전용 코드
          const __filename = fileURLToPath(import.meta.url);
          const __dirname = dirname(__filename);
          
          // CSV 파일 경로 및 출력 디렉터리 설정
          const csvFilePath = join(__dirname, '..', 'translations', 'translations.csv');
          const localesPath = join(__dirname, '..', 'public', 'locales');
          
          // 언어별 번역 데이터를 담을 객체
          const translations = {};
          
          // CSV 파일을 스트림으로 읽고, 각 행(row)을 처리
          fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', row => {
              const translationKey = row.key;
              for (const lang in row) {
                if (lang === 'key') continue;
                if (!translations[lang]) {
                  translations[lang] = {};
                }
                translations[lang][translationKey] = row[lang];
              }
            })
            .on('end', () => {
              console.log('CSV 파일 읽기 완료!');
          
              // 언어별로 common.json 파일 생성
              for (const lang of Object.keys(translations)) {
                const langDir = join(localesPath, lang);
                if (!fs.existsSync(langDir)) {
                  fs.mkdirSync(langDir, { recursive: true });
                }
                const jsonFilePath = join(langDir, 'common.json');
                fs.writeFileSync(
                  jsonFilePath,
                  JSON.stringify(translations[lang], null, 2),
                  'utf8',
                );
                console.log(`${lang} -> ${jsonFilePath} 생성 완료`);
              }
            });
         ```
        - `translations[lang][translationKey] = row[lang]`를 통해 CSV의 해당 언어 텍스트를 JSON으로 매핑
        - 완료 후 `public/locales/<언어>/common.json`에 저장하면, `react-i18next`가 바로 읽을 수 있음
     7. Github Actions 워크플로우 작성
        `.github/workflows/update-translations.yml`
        - `path` 옵션으로  `traslations/**`에 대한 변경 발생 시 트리거
        - `pnpm exec ts-node --transpile-only scripts/generateTranslations.js`로 스크립트 실행
        - 작업 완료 후, 변경된 `public/locales` 파일들을 Github Actions 봇 계정으로 커밋,푸시
        ```yml
          name: Update Translations

          on:
            push:
              paths:
                - 'translations/**'
            workflow_dispatch:
          
          jobs:
            update-translations:
              runs-on: ubuntu-latest
              steps:
                - name: Checkout repository
                  uses: actions/checkout@v3
          
                - name: Set up Node.js
                  uses: actions/setup-node@v3
                  with:
                    node-version: '20'
          
                - name: Install pnpm
                  run: npm install -g pnpm
          
                - name: Install dependencies
                  run: pnpm install
          
                - name: Generate translation JSON
                  run: pnpm exec ts-node --transpile-only scripts/generateTranslations.js
          
                - name: Commit updated translations
                  run: |
                    git config --global user.name "github-actions"
                    git config --global user.email "github-actions@github.com"
                    git add public/locales
                    git diff --cached --quiet || (git commit -m "chore: update translations" && git push)
        ```
    8. 동작 흐름
       1. CSV 수정 → push
       2. GitHub Actions가 update-translations 워크플로우 실행
       3. scripts/generateTranslations.ts → CSV → JSON 변환
       4. public/locales 폴더에 변경 발생 시 자동 커밋
       5. 최종적으로 레포지토리에 번역 파일이 업데이트되어, 배포 시 최신 번역이 반영
    9. 다국어 전환(언어 선택) 구현
        ```typescript
          import { useTranslation } from 'react-i18next';
          import styles from './languageSwitcher.module.scss';
          import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
          
          const options = [
            {
              label: '한국어',
              value: 'ko',
            },
            {
              label: 'English',
              value: 'en',
            },
          ];
          
          const LanguageSwitcher = ({
            setIsShow,
          }: {
            setIsShow: Dispatch<SetStateAction<boolean>>;
          }) => {
            const { i18n } = useTranslation();
            const wrapperRef = useRef<HTMLDivElement>(null);

            // 클릭한 요소의 value값으로 언어 스크립트 변경
            const handleChange = (value: string) => {
              i18n.changeLanguage(value);
            };
          
            useEffect(() => {
              // 외부를 클릭하면 닫기
              const handleClickOutside = (event: MouseEvent) => {
                if (
                  wrapperRef.current &&
                  !wrapperRef.current.contains(event.target as Node)
                ) {
                  setIsShow(false);
                }
              };
              document.addEventListener('mousedown', handleClickOutside);
              return () => document.removeEventListener('mousedown', handleClickOutside);
            }, []);
          
            return (
              <div ref={wrapperRef} className={styles.wrapper}>
                {options.map((option: { label: string; value: string }) => (
                  <div className={styles.item} onClick={() => handleChange(option.value)}>
                    {option.label}
                  </div>
                ))}
              </div>
            );
          };
          
          export default LanguageSwitcher;
        ```
          
  </details>

### 폴더 구조
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

// scripts/generateTranslations.js

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import csv from 'csv-parser';

// __filename, __dirname 대신 사용할 수 있는 ESM 전용 코드
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 번역 csv 파일 배열
const csvs = [
  { locales: 'common.json', translations: 'commonTranslations.csv' },
  { locales: 'mainPage.json', translations: 'mainPageTranslations.csv' },
];

// CSV 파일 경로 및 출력 디렉터리 설정
const csvFilePaths = csvs.map(csv => ({
  locales: csv.locales,
  translations: join(__dirname, '..', 'translations', csv.translations),
}));
const localesPath = join(__dirname, '..', 'locales');

// CSV 파일을 스트림으로 읽고, 각 행(row)을 처리
csvFilePaths.forEach(csvFilePath => {
  // 언어별 번역 데이터를 담을 객체
  const translations = {};
  fs.createReadStream(csvFilePath.translations)
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

      // 언어별로 json 파일 생성
      for (const lang of Object.keys(translations)) {
        const langDir = join(localesPath, lang);
        if (!fs.existsSync(langDir)) {
          fs.mkdirSync(langDir, { recursive: true });
        }
        const jsonFilePath = join(langDir, csvFilePath.locales);
        fs.writeFileSync(
          jsonFilePath,
          JSON.stringify(translations[lang], null, 2),
          'utf8',
        );
        console.log(`${lang} -> ${jsonFilePath} 생성 완료`);
      }
    });
});

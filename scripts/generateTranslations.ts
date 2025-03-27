import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const csvFilePath = path.join(
  __dirname,
  '..',
  'translations',
  'translations.csv',
);
const localesPath = path.join(__dirname, '..', 'public', 'locales');

let translations = {};

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', row => {
    // row 예시: { key: 'hello', ko: '안녕하세요', en: 'Hello' }
    const translationKey = row.key;
    Object.keys(row).forEach(lang => {
      if (lang === 'key') return;
      if (!translations[lang]) {
        translations[lang] = {};
      }
      translations[lang][translationKey] = row[lang];
    });
  })
  .on('end', () => {
    console.log('CSV 파일 읽기 완료');

    // 각 언어별 JSON 파일 생성
    Object.keys(translations).forEach(lang => {
      const langDir = path.join(localesPath, lang);
      if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
      }
      const jsonFilePath = path.join(langDir, 'common.json');
      fs.writeFileSync(
        jsonFilePath,
        JSON.stringify(translations[lang], null, 2),
        'utf8',
      );
      console.log(`${lang} 번역 파일 생성 완료: ${jsonFilePath}`);
    });
  });

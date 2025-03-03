import { Globe } from 'lucide-react';
import styles from './languageButton.module.scss';

export default function LanguageButton() {
  return (
    <button className={styles.languageButton}>
      <Globe color='#000000' />
    </button>
  );
}

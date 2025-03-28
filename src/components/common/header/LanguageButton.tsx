import { Globe } from 'lucide-react';
import styles from './languageButton.module.scss';
import LanguageSwitcher from './LanguageSwitcher';
import { useEffect, useRef, useState } from 'react';

export default function LanguageButton() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
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
      <button
        className={styles.languageButton}
        onClick={() => setIsShow(prev => !prev)}
      >
        <Globe color='#000000' />
      </button>
      {isShow && <LanguageSwitcher setIsShow={setIsShow} />}
    </div>
  );
}

import { useState, useRef, useEffect } from 'react';
import styles from './select.module.scss';
import { ChevronDown, MapPin, Search } from 'lucide-react';
import clsx from 'clsx';

const getIcon = (icon?: string) => {
  switch (icon) {
    case 'search':
      return <Search className={styles.icon} />;
    case 'map-pin':
      return <MapPin className={styles.icon} />;
    default:
      return null;
  }
};

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  icon?: string;
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
}

export default function Select({
  icon,
  options,
  defaultValue,
  onChange,
  name,
  ...props
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0]?.value,
  );
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (optionValue: string) => {
    setSelectedValue(optionValue);
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.selectWrapper} ref={wrapperRef} {...props}>
      {getIcon(icon)}
      <div
        className={clsx(styles.customSelect, icon && styles.isIcon)}
        onClick={() => setIsOpen(prev => !prev)}
        tabIndex={0}
      >
        {selectedOption ? selectedOption.label : '옵션 선택'}
        <ChevronDown className={styles.arrow} />
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map(opt => (
            <li
              key={opt.value}
              className={styles.option}
              onClick={() => handleOptionClick(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
      {name && <input type='hidden' name={name} value={selectedValue} />}
    </div>
  );
}

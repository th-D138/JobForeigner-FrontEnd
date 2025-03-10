import { MapPin, Search } from 'lucide-react';
import styles from './input.module.scss';

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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

export default function Input({ icon, ...props }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      {getIcon(icon)}
      <input className={styles.input} {...props} />
    </div>
  );
}

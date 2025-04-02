import { X } from 'lucide-react';
import styles from './skillTag.module.scss';

export default function SkillTag({
  children,
  handleRemoveSkill,
}: {
  children: React.ReactNode;
  handleRemoveSkill: () => void;
}) {
  return (
    <div className={styles.skillTag}>
      {children}
      <X className={styles.closeIcon} onClick={handleRemoveSkill} />
    </div>
  );
}

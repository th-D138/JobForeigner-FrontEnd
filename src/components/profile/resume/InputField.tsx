import styles from './inputField.module.scss';

interface InputFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export default function InputField({
  label,
  required = false,
  children,
}: InputFieldProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      {children}
    </div>
  );
}

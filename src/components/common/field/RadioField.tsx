import { Control } from 'react-hook-form';
import FormField from '../form/FormField';
import FormItem from '../form/FormItem';
import FormLabel from '../form/FormLabel';
import { RadioGroup, RadioGroupItem } from '../radio/Radio';
import FormMessage from '../form/FormMessage';
import styles from './radioField.module.scss';

type RadioFieldProps = {
  control: Control;
  name: string;
  label: string;
  required?: boolean;
  options: {
    value: string;
    label: string;
  }[][];
};

/**
 * React Hook Form 라디오 필드
 * @param control - React Hook Form 컨트롤
 * @param name - 필드 이름
 * @param label - 필드 레이블
 * @param required - 필수 여부
 * @param options - 옵션 목록
 * 예시:
 * options = [
 *  [
 *    { value: 'option1', label: '옵션1' },
 *    { value: 'option2', label: '옵션2' },
 *  ],
 */
export default function RadioField({
  control,
  name,
  label,
  required = false,
  options,
}: RadioFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}{' '}
            {required && (
              <span
                aria-label='required'
                style={{ color: 'var(--color-red-500)' }}
              >
                *
              </span>
            )}
          </FormLabel>
          <RadioGroup
            onValueChange={field.onChange}
            value={field.value}
            className={styles.radioGroup}
          >
            {options.map((optionRow, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${optionRow.length}, 1fr)`,
                  gap: '0.5rem',
                }}
              >
                {optionRow.map(option => (
                  <div key={option.value} className={styles.radioOption}>
                    <RadioGroupItem
                      value={option.value}
                      id={`${name}-${option.value}`}
                    />
                    <label htmlFor={`${name}-${option.value}`}>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </RadioGroup>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

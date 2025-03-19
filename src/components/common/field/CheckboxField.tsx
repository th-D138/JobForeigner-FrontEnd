import { Control } from 'react-hook-form';
import FormField from '../form/FormField';
import FormItem from '../form/FormItem';
import FormLabel from '../form/FormLabel';
import Checkbox from '../checkbox/Checkbox';
import FormMessage from '../form/FormMessage';

type CheckboxFieldProps = {
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
 * React Hook Form 체크박스 필드
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
 * ]
 *
 */
export default function CheckboxField({
  control,
  name,
  label,
  required = false,
  options,
}: CheckboxFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedValues = Array.isArray(field.value) ? field.value : [];
        console.log(selectedValues);
        return (
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
                  <Checkbox
                    key={option.value}
                    checked={selectedValues.some(
                      selected => selected.value === option.value,
                    )}
                    onCheckedChange={checked => {
                      if (checked) {
                        field.onChange([...selectedValues, option]);
                      } else {
                        field.onChange(
                          selectedValues.filter(
                            selected => selected.value !== option.value,
                          ),
                        );
                      }
                    }}
                  >
                    {option.label}
                  </Checkbox>
                ))}
              </div>
            ))}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

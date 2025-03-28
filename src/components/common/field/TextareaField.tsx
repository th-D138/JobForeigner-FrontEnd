import FormField from '../form/FormField';
import FormItem from '../form/FormItem';
import FormLabel from '../form/FormLabel';
import FormMessage from '../form/FormMessage';
import type { Control, FieldValues } from 'react-hook-form';
import Textarea from '../textarea/Textarea';

type TextareaFieldProps = {
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * - React Hook Form 텍스트 필드 컴포넌트
 *   - 텍스트 필드 타입 지원
 *   - 필수 입력 칸 입니다. 메시지 표시 지원
 * - control: 폼 제어 객체
 * - name: 필드 이름
 * - label: 필드 레이블
 * - placeholder: 필드 플레이스홀더
 * - required: 필수 입력 여부
 * - 나머지 props: (onChange, onKeyDown 등) InputHTMLAttributes(input 태그의 속성)
 */
const TextareaField = ({
  control,
  name,
  label,
  placeholder = '필수 입력 칸 입니다.',
  required = false,
}: TextareaFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} &nbsp;{' '}
            {required && (
              <span
                aria-label='required'
                style={{ color: 'var(--color-red-500)' }}
              >
                *
              </span>
            )}
          </FormLabel>
          <Textarea
            {...field}
            placeholder={placeholder}
            onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextareaField;

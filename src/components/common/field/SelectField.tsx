import { Control } from 'react-hook-form';
import FormField from '../form/FormField';
import FormItem from '../form/FormItem';
import FormLabel from '../form/FormLabel';
import Select from '../select/Select';
import FormMessage from '../form/FormMessage';

type Props = {
  control: Control;
  name: string;
  label: string;
  required?: boolean;
  options: {
    value: string;
    label: string;
  }[];
};

/**
 * - React Hook Form 선택 필드 컴포넌트
 *   - 선택 필드 타입 지원
 *   - 필수 입력 칸 입니다. 메시지 표시 지원
 * - control: 폼 제어 객체
 * - name: 필드 이름
 * - label: 필드 레이블
 * - required: 필수 입력 여부
 * - options: 선택 필드 옵션 배열({value: string, label: string}[])
 *   - value: 옵션 값
 *   - label: 옵션 레이블
 */
export default function SelectField({
  control,
  name,
  label,
  required = false,
  options,
}: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>
              {label} &nbsp;{' '}
              {required && (
                <span style={{ color: 'var(--color-red-500)' }}>*</span>
              )}
            </FormLabel>
            <Select {...field} options={options} />
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

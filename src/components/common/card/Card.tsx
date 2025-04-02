import styles from './card.module.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * - 카드 컴포넌트
 *   - 카드 모양으로 특정 컴포넌트를 감쌀 때 사용
 * - children: 카드 내용
 * - 나머지 props: (onClick, children 등) HTMLAttributes(div 태그의 속성)
 */
export default function Card({ children, ...props }: CardProps) {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
}

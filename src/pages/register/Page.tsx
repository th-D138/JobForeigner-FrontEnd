import Card from '@/components/common/card/Card';
import styles from './page.module.scss';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <h1>JobForeigner</h1>
      <h2>회원가입</h2>
      <p>
        이미 계정이 있으신가요? <Link to='/login'>로그인</Link>
      </p>
      <Card>회원가입 내용</Card>
    </div>
  );
}

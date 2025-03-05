import UserProfile from '@/components/profile/UserProfile';

import styles from './page.module.scss';

export default function ProfilePage() {
  return (
    <div className={styles.layout}>
      <div>sidebar</div>
      <div className={styles.container}>
        <main className={styles.page}>
          <h1>프로필</h1>
          <UserProfile />
          <section>
            <h2>내 이력서</h2>
          </section>
          <section>
            <h2>지원 내역</h2>
          </section>
        </main>
      </div>
    </div>
  );
}

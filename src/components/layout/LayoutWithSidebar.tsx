import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import RootErrorBoundary from '@/components/error/RootErrorBoundary';
import Sidebar from '../common/sidebar/Sidebar';

import styles from './layoutWithSidebar.module.scss';

interface Props {
  navItems: {
    name: string;
    icon: React.ReactNode;
    items: {
      name: string;
      href: string;
    }[];
  }[];
}

export default function LayoutWithSidebar({ navItems }: Props) {
  return (
    <RootErrorBoundary>
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar navigation={navItems} />
        </div>
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </RootErrorBoundary>
  );
}

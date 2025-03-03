import { Outlet } from 'react-router-dom';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import RootErrorBoundary from '@/components/error/RootErrorBoundary';

export default function Layout() {
  return (
    <RootErrorBoundary>
      <Header />
      <Outlet />
      <Footer />
    </RootErrorBoundary>
  );
}

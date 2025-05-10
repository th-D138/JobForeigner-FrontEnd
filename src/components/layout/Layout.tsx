import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import RootErrorBoundary from '@/components/error/RootErrorBoundary';
import { QueryClientProvider } from '@/lib/QueryClientProvider';

export default function Layout() {
  return (
    <QueryClientProvider>
      <RootErrorBoundary>
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </RootErrorBoundary>
    </QueryClientProvider>
  );
}

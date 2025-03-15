import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/layout/Layout';

// 만든 HOC 임포트
import withSuspense from '@/pages/withSuspense';
import LayoutWithSidebar from './components/layout/LayoutWithSidebar';

const MainPage = lazy(() => import('./pages/main/Page'));
const ProfilePage = lazy(() => import('./pages/profile/Page'));
const CommunityPage = lazy(() => import('./pages/community/Page'));
const CompaniesPage = lazy(() => import('./pages/companies/Page'));
const DetailCompanyPage = lazy(() => import('./pages/companies/DetailPage'));
const NotFoundPage = lazy(() => import('./pages/notFound/Page'));

// 각 페이지를 Suspense가 적용된 HOC로 감싸기
const SuspensedMainPage = withSuspense(MainPage);
const SuspensedProfilePage = withSuspense(ProfilePage);
const SuspensedCommunityPage = withSuspense(CommunityPage);
const SuspensedCompaniesPage = withSuspense(CompaniesPage);
const SuspensedDetailCompanyPage = withSuspense(DetailCompanyPage);
const SuspensedNotFoundPage = withSuspense(NotFoundPage);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Layout이 적용되는 라우트들 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<SuspensedMainPage />} />
        <Route path="community" element={<SuspensedCommunityPage />} />
        <Route path="companies" element={<SuspensedCompaniesPage />} />
        <Route path="companies/:id" element={<SuspensedDetailCompanyPage />} />
      </Route>

      <Route path="/" element={<LayoutWithSidebar />}>
        <Route path="profile" element={<SuspensedProfilePage />} />
      </Route>

      {/* Layout이 적용되지 않는 라우트 */}
      <Route path="*" element={<SuspensedNotFoundPage />} />
    </>,
  ),
);

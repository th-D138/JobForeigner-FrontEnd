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
const CreateResumePage = lazy(() => import('./pages/profile/resume/Page'));
const CommunityPage = lazy(() => import('./pages/community/Page'));
const CompaniesPage = lazy(() => import('./pages/companies/Page'));
const RecruitPage = lazy(() => import('./pages/jobs/Page'));
const DetailRecuitPage = lazy(() => import('./pages/jobs/DetailPage'));
const DetailCompanyPage = lazy(() => import('./pages/companies/DetailPage'));
const NotFoundPage = lazy(() => import('./pages/notFound/Page'));

// 각 페이지를 Suspense가 적용된 HOC로 감싸기
const SuspensedMainPage = withSuspense(MainPage);
const SuspensedProfilePage = withSuspense(ProfilePage);
const SuspensedCreateResumePage = withSuspense(CreateResumePage);
const SuspensedCommunityPage = withSuspense(CommunityPage);
const SuspensedCompaniesPage = withSuspense(CompaniesPage);
const SuspensedRecruitPage = withSuspense(RecruitPage);
const SuspensedDetailRecuitPage = withSuspense(DetailRecuitPage);
const SuspensedDetailCompanyPage = withSuspense(DetailCompanyPage);
const SuspensedNotFoundPage = withSuspense(NotFoundPage);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Layout이 적용되는 라우트들 */}
      <Route path='/' element={<Layout />}>
        <Route index element={<SuspensedMainPage />} />
        <Route path='community' element={<SuspensedCommunityPage />} />
        <Route path='companies' element={<SuspensedCompaniesPage />} />
        <Route path='companies/:id' element={<SuspensedDetailCompanyPage />} />
        <Route path='jobs' element={<SuspensedRecruitPage />} />
        <Route path='jobs/:id' element={<SuspensedDetailRecuitPage />} />
      </Route>

      {/* Sidebar가 포함된 라우트 */}
      <Route path='/' element={<LayoutWithSidebar />}>
        <Route path='profile' element={<SuspensedProfilePage />} />
        <Route path='/profile/resume' element={<SuspensedCreateResumePage />} />
      </Route>

      {/* Layout이 적용되지 않는 라우트 */}
      <Route path='*' element={<SuspensedNotFoundPage />} />
    </>,
  ),
);

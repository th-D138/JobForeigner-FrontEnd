import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { lazy } from 'react';

// 만든 HOC 임포트
import withSuspense from '@/pages/withSuspense';

const MainPage = lazy(() => import('./pages/main/Page'));
const CommunityPage = lazy(() => import('./pages/community/Page'));
const CompaniesPage = lazy(() => import('./pages/companies/Page'));
const NotFoundPage = lazy(() => import('./pages/notFound/Page'));

// 각 페이지를 HOC로 감싸기
const SuspensedMainPage = withSuspense(MainPage);
const SuspensedCommunityPage = withSuspense(CommunityPage);
const SuspensedCompaniesPage = withSuspense(CompaniesPage);
const SuspensedNotFoundPage = withSuspense(NotFoundPage);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<SuspensedMainPage />} />
      <Route path="community" element={<SuspensedCommunityPage />} />
      <Route path="companies" element={<SuspensedCompaniesPage />} />
      <Route path="*" element={<SuspensedNotFoundPage />} />
    </Route>
  )
);

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
import {
  companySidebarNavItems,
  userSidebarNavItems,
} from './lib/constants/navItems';

// 메인 페이지랑 관련된 페이지들
const MainPage = lazy(() => import('./pages/main/Page'));

// 유저용 프로필이랑 관련된 페이지들
const ProfilePage = lazy(() => import('./pages/profile/Page'));
const ResumeListPage = lazy(() => import('./pages/profile/resume/Page'));
const CreateResumePage = lazy(
  () => import('./pages/profile/resume/create/Page'),
);
const ApplicationsPage = lazy(
  () => import('./pages/profile/applications/Page'),
);
const LikedCompaniesPage = lazy(
  () => import('./pages/profile/bookmark/liked-companies/Page'),
);
const ScrapRecruitmentsPage = lazy(
  () => import('./pages/profile/bookmark/scraps/Page'),
);

// 기업용 프로필이랑 관련된 페이지들
const CompanyProfilePage = lazy(() => import('./pages/profile/company/Page'));
const CompanyProfileEditPage = lazy(
  () => import('./pages/profile/company/edit/Page'),
);
const CompanyProfileRecruitmentPage = lazy(
  () => import('./pages/profile/company/recruitment/Page'),
);
const CompanyProfileApplicationsPage = lazy(
  () => import('./pages/profile/company/applications/Page'),
);

const CommunityPage = lazy(() => import('./pages/community/Page'));
const CompaniesPage = lazy(() => import('./pages/companies/Page'));
const RecruitPage = lazy(() => import('./pages/jobs/Page'));
const DetailRecuitPage = lazy(() => import('./pages/jobs/DetailPage'));
const DetailCompanyPage = lazy(() => import('./pages/companies/DetailPage'));
const SelectResumePage = lazy(() => import('./pages/jobs/SelectResume'));
const ApplySucessedPage = lazy(() => import('./pages/jobs/ApplySucessed'));
const ApplyFailedPage = lazy(() => import('./pages/jobs/ApplyFailed'));
const NotFoundPage = lazy(() => import('./pages/notFound/Page'));
const RegisterPage = lazy(() => import('./pages/register/Page'));
const LoginPage = lazy(() => import('./pages/login/Page'));

// 각 페이지를 Suspense가 적용된 HOC로 감싸기
// 메인 페이지랑 관련된 페이지들
const SuspensedMainPage = withSuspense(MainPage);

// 유저용 프로필이랑 관련된 페이지들
const SuspensedProfilePage = withSuspense(ProfilePage);
const SuspensedResumeListPage = withSuspense(ResumeListPage);
const SuspensedCreateResumePage = withSuspense(CreateResumePage);
const SuspensedApplicationsPage = withSuspense(ApplicationsPage);
const SuspensedLikedCompaniesPage = withSuspense(LikedCompaniesPage);
const SuspensedScrapRecruitmentsPage = withSuspense(ScrapRecruitmentsPage);

// 기업용 프로필이랑 관련된 페이지들
const SuspensedCompanyProfilePage = withSuspense(CompanyProfilePage);
const SuspensedCompanyProfileEditPage = withSuspense(CompanyProfileEditPage);
const SuspensedCompanyProfileRecruitmentPage = withSuspense(
  CompanyProfileRecruitmentPage,
);
const SuspensedCompanyProfileApplicationsPage = withSuspense(
  CompanyProfileApplicationsPage,
);

const SuspensedCommunityPage = withSuspense(CommunityPage);
const SuspensedCompaniesPage = withSuspense(CompaniesPage);
const SuspensedRecruitPage = withSuspense(RecruitPage);
const SuspensedDetailRecuitPage = withSuspense(DetailRecuitPage);
const SuspensedDetailCompanyPage = withSuspense(DetailCompanyPage);
const SuspensedSelectResumePage = withSuspense(SelectResumePage);
const SuspensedApplySucessedPage = withSuspense(ApplySucessedPage);
const SuspensedApplyFailPage = withSuspense(ApplyFailedPage);
const SuspensedNotFoundPage = withSuspense(NotFoundPage);
const SuspensedRegisterPage = withSuspense(RegisterPage);
const SuspensedLoginPage = withSuspense(LoginPage);

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
        <Route path='select-resume' element={<SuspensedSelectResumePage />} />
        <Route path='apply-sucess' element={<SuspensedApplySucessedPage />} />
        <Route path='apply-fail' element={<SuspensedApplyFailPage />} />
        <Route path='register' element={<SuspensedRegisterPage />} />
        <Route path='login' element={<SuspensedLoginPage />} />
      </Route>

      {/* 유저 프로필 관련 라우트 */}
      <Route
        path='/'
        element={<LayoutWithSidebar navItems={userSidebarNavItems} />}
      >
        <Route path='profile' element={<SuspensedProfilePage />} />
        <Route path='profile/resume' element={<SuspensedResumeListPage />} />
        <Route
          path='profile/resume/create'
          element={<SuspensedCreateResumePage />}
        />
        <Route
          path='profile/applications'
          element={<SuspensedApplicationsPage />}
        />
        <Route
          path='profile/liked-companies'
          element={<SuspensedLikedCompaniesPage />}
        />
        <Route
          path='profile/scraps'
          element={<SuspensedScrapRecruitmentsPage />}
        />
      </Route>

      {/* 기업 프로필 관련 라우트 */}
      <Route
        path='/profile/company'
        element={<LayoutWithSidebar navItems={companySidebarNavItems} />}
      >
        <Route index element={<SuspensedCompanyProfilePage />} />
        <Route path='edit' element={<SuspensedCompanyProfileEditPage />} />
        <Route
          path='recruitment'
          element={<SuspensedCompanyProfileRecruitmentPage />}
        />
        <Route
          path='applications'
          element={<SuspensedCompanyProfileApplicationsPage />}
        />
      </Route>

      {/* Layout이 적용되지 않는 라우트 */}
      <Route path='*' element={<SuspensedNotFoundPage />} />
    </>,
  ),
);

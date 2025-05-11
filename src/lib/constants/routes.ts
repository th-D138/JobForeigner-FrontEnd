export const PATH = {
  INDEX: '/',

  LOGIN: '/login',
  REGISTER: '/register',

  PROFILE: '/profile',
  PROFILE_RESUME: '/profile/resume',
  PROFILE_RESUME_CREATE: '/profile/resume/create',
  PROFILE_APPLICATIONS: '/profile/applications',
  PROFILE_LIKED_COMPANIES: '/profile/liked-companies',
  PROFILE_SCRAPS: '/profile/scraps',

  PROFILE_COMPANY: '/profile/company',
  PROFILE_COMPANY_EDIT: '/profile/company/edit',
  PROFILE_COMPANY_RECRUITMENT: '/profile/company/recruitment',
  PROFILE_COMPANY_APPLICATIONS: '/profile/company/applications',

  COMMUNITY: '/community',

  COMPANIES: '/companies',
  COMPANIES_DETAIL: '/companies/:id',

  JOBS: '/jobs',
  JOB_DETAIL: '/jobs/:id',

  SELECT_RESUME: '/select-resume',

  APPLY_SUCCESS: '/apply-success',

  APPLY_FAIL: '/apply-fail',

  NOT_FOUND: '*',
} as const;

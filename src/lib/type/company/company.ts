export type CompanyProfileInfo = {
  name: string;
  logo: string;
  ceo: string;
  businessNumber: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  industry: string;
  foundedYear: string;
  employeeCount: string;
  description: string;
};

export type CompanyRecruitmentCard = {
  id: number;
  title: string;
  location: string;
  employmentType: string;
  createdAt: string;
  expiresAt: string;
  status: string;
  applicantsCount: number;
  viewCount: number;
};

export type CompanyApplicationCard = {
  id: number;
  jobId: number;
  jobTitle: string;
  jobInfo: {
    position: string;
    department: string;
    employmentType: string;
    expiresAt: string;
  };
  applicant: {
    name: string;
    photo: string;
    email: string;
    phone: string;
  };
  resumeTitle: string;
  appliedAt: string;
  status: string;
  interviewDate?: string | null;
};

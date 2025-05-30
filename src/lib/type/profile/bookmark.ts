export type Company = {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  employeeCount: string;
  bookmarkedAt: string;
  activeJobsCount: number;
  isNotificationOn: boolean;
};

export type Job = {
  id: number;
  title: string;
  company: {
    id: number;
    name: string;
    logo: string;
  };
  location: string;
  employmentType: string;
  salary: string;
  expiresAt: string;
  bookmarkedAt: string;
  status: 'active' | 'expired';
};

export type Application = {
  id: number;
  company: string;
  title: string;
  logo: string;
  location: string;
  appliedAt: string;
  status: string;
  resumeTitle: string;
};

export type ApplicationHistoryType = {
  id: number;
  company: string;
  position: string;
  appliedAt: string;
  status: string;
};

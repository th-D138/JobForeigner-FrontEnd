import { ApplicationHistoryType } from './application';

export type UserProfileInfo = {
  name: string;
  email: string;
  phoneNumber: string;
  region: string;
  profileImageUrl?: string;
  resumes: {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
  }[];
  applications: ApplicationHistoryType[];
};

import { Application } from '@/lib/type/profile/application';
import clsx from 'clsx';
import styles from './applicationsTabs.module.scss';

interface ApplicationsTabsProps {
  applications: Application[];
  reviewing: Application[];
  interviewing: Application[];
  accepted: Application[];
  selectedApplications: { status: string; applications: Application[] };
  setSelectedApplications: (applications: {
    status: string;
    applications: Application[];
  }) => void;
}

export default function ApplicationsTabs({
  applications,
  reviewing,
  interviewing,
  accepted,
  selectedApplications,
  setSelectedApplications,
}: ApplicationsTabsProps) {
  return (
    <>
      <button
        className={clsx(
          styles.tab,
          selectedApplications.status === 'all' && styles.active,
        )}
        onClick={() =>
          setSelectedApplications({
            status: 'all',
            applications: applications,
          })
        }
      >
        전체 ({applications.length})
      </button>
      <button
        className={clsx(
          styles.tab,
          selectedApplications.status === 'reviewing' && styles.active,
        )}
        onClick={() =>
          setSelectedApplications({
            status: 'reviewing',
            applications: reviewing,
          })
        }
      >
        서류 검토중 ({reviewing.length})
      </button>
      <button
        className={clsx(
          styles.tab,
          selectedApplications.status === 'interview' && styles.active,
        )}
        onClick={() =>
          setSelectedApplications({
            status: 'interview',
            applications: interviewing,
          })
        }
      >
        면접 예정 ({interviewing.length})
      </button>
      <button
        className={clsx(
          styles.tab,
          selectedApplications.status === 'accepted' && styles.active,
        )}
        onClick={() =>
          setSelectedApplications({
            status: 'accepted',
            applications: accepted,
          })
        }
      >
        완료 ({accepted.length})
      </button>
    </>
  );
}

import { Link, NavLink } from 'react-router-dom';
import styles from './sidebar.module.scss';
import clsx from 'clsx';
import { Briefcase, Building2, FileText, LogOut, Settings } from 'lucide-react';

interface SidebarItemProps {
  icon?: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}

interface SidebarItemSubItemProps {
  name: string;
  href: string;
}

function SidebarItem({ icon, title, children }: SidebarItemProps) {
  return (
    <div className={styles.navItem}>
      <button className={styles.navButton}>
        {icon}
        {title}
      </button>
      {children && <div className={styles.subMenu}>{children}</div>}
    </div>
  );
}

SidebarItem.subItem = ({ name, href }: SidebarItemSubItemProps) => (
  <NavLink
    to={href}
    className={({ isActive }) =>
      isActive ? clsx(styles.subItem, styles.active) : styles.subItem
    }
  >
    {name}
  </NavLink>
);

const navigation = [
  {
    name: '이력서 관리',
    icon: <FileText />,
    items: [
      { name: '이력서 목록', href: '/mypage/resume' },
      { name: '이력서 작성', href: '/mypage/resume/create' },
    ],
  },
  {
    name: '지원 관리',
    icon: <Briefcase />,
    items: [
      { name: '지원 내역', href: '/mypage/applications' },
      { name: '지원 현황', href: '/mypage/applications/status' },
    ],
  },
  {
    name: '기업 정보',
    icon: <Building2 />,
    items: [
      { name: '기업 정보 수정', href: '/mypage/company/edit' },
      { name: '기업 프로필 관리', href: '/mypage/company/profile' },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.header}>
          <h2>프로필</h2>
        </div>
        <nav className={styles.nav}>
          {navigation.map(section => (
            <SidebarItem
              key={section.name}
              icon={section.icon}
              title={section.name}
            >
              {section.items.map(item => (
                <SidebarItem.subItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                />
              ))}
            </SidebarItem>
          ))}
        </nav>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link to='/profile/settings' className={styles.footerLink}>
            <Settings />
            설정
          </Link>
          <button className={styles.logoutButton}>
            <LogOut />
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}

import { useLocation } from 'react-router-dom';

import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar';
import { useLogOutMutation } from '@/hooks/useSignFlow';

import Icons from '../Icons';

import { NavMain } from './nav-main';

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const { mutate: logout } = useLogOutMutation();
  const location = useLocation();

  const basePath = location.pathname.startsWith('/week4') ? '/week4' : '/week3';

  const createHashUrl = (path: string) => {
    return `/#${path}`;
  };

  const data = {
    navMain: [
      {
        title: 'Dashboard',
        url: '#',
        icon: Icons.Dashboard,
        isActive: true,
        items: [
          {
            title: '產品管理',
            url: createHashUrl(`${basePath}/products`),
          },
          {
            title: '登出',
            onClick: () => {
              logout();
            },
          },
        ],
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

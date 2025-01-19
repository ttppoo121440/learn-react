import { Outlet } from 'react-router';

import { AppSidebar } from '@/components/Sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const Week3 = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Week3;

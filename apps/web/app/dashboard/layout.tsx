import React from 'react';

import { cookies } from 'next/headers';

import Header from '../../components/layout/header/index';
import Sidebar from '../../components/layout/sidebar';
import { SidebarInset, SidebarProvider } from '../../components/ui/sidebar';
import { Toaster } from '../../components/ui/sonner';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen =
    cookieStore.get('sidebar_state')?.value === 'true' ||
    cookieStore.get('sidebar_state') === undefined;

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar />
      <SidebarInset>
        <Header />
        <div className="@container/main p-4 xl:group-data-[theme-content-layout=centered]/layout:container xl:group-data-[theme-content-layout=centered]/layout:mx-auto xl:group-data-[theme-content-layout=centered]/layout:mt-8">
          {children}
        </div>
        <Toaster position="top-center" />
      </SidebarInset>
    </SidebarProvider>
  );
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRequiredSubscription } from '../lib/hooks/use-required-subscription';

export default function DashboardPage() {
  // Makerkit: block access unless logged in & subscribed
  useRequiredSubscription();
  
  const router = useRouter();

  useEffect(() => {
    // Redirect to the admin dashboard default page
    router.replace('/admin/dashboard/default');
  }, [router]);

  return (
    <div className="p-6 text-xl font-semibold">
      Redirecting to dashboard...
    </div>
  );
}

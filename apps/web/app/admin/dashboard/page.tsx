'use client';

import { useRequiredSubscription } from '../../lib/hooks/use-required-subscription';

export default function DashboardPage() {
  // Makerkit: block access unless logged in & subscribed
  useRequiredSubscription();

  return (
    <div className="p-6 text-xl font-semibold">
      ✅ Welcome to your Shadcn + Makerkit Dashboard
    </div>
  );
}

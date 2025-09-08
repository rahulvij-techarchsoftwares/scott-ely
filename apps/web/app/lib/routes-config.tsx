type PageRoutesType = {
  title: string;
  items: PageRoutesItemType;
};

type PageRoutesItemType = {
  title: string;
  href: string;
  icon?: string;
  isComing?: boolean;
  isDataBadge?: string;
  isNew?: boolean;
  newTab?: boolean;
  items?: PageRoutesItemType;
}[];

export const page_routes: PageRoutesType[] = [
  {
    title: 'Dashboards',
    items: [
      {
        title: 'Default',
        href: '/admin/dashboard/default',
        icon: 'ChartPie',
      },
      {
        title: 'E-commerce',
        href: '#',
        icon: 'ShoppingBag',
        items: [
          { title: 'Dashboard', href: '/admin/dashboard/ecommerce' },
          {
            title: 'Product List',
            href: '/admin/dashboard/pages/products',
          },
          {
            title: 'Product Detail',
            href: '/admin/dashboard/pages/products/1',
          },
          {
            title: 'Add Product',
            href: '/admin/dashboard/pages/products/create',
          },
          { title: 'Order List', href: '/admin/dashboard/pages/orders' },
          {
            title: 'Order Detail',
            href: '/admin/dashboard/pages/orders/detail',
          },
        ],
      },
      {
        title: 'Sales',
        href: '/admin/dashboard/sales',
        icon: 'BadgeDollarSign',
      },
      {
        title: 'CRM',
        href: '/admin/dashboard/crm',
        icon: 'ChartBarDecreasing',
      },
      {
        title: 'Website Analytics',
        href: '/admin/dashboard/website-analytics',
        icon: 'Gauge',
      },
      {
        title: 'Project Management',
        href: '/admin/dashboard/project-management',
        icon: 'FolderDot',
      },
      {
        title: 'File Manager',
        href: '/admin/dashboard/file-manager',
        icon: 'Folder',
      },
      {
        title: 'Crypto',
        href: '/admin/dashboard/crypto',
        icon: 'WalletMinimal',
      },
      {
        title: 'Academy/School',
        href: '/admin/dashboard/academy',
        icon: 'GraduationCap',
      },
      {
        title: 'Hospital Management',
        href: '/admin/dashboard/hospital-management',
        icon: 'Activity',
      },
      {
        title: 'Hotel Dashboard',
        href: '/admin/dashboard/hotel',
        icon: 'Building2',
        isComing: true,
      },
      {
        title: 'Finance',
        href: '/admin/dashboard/finance',
        icon: 'WalletMinimal',
        isComing: true,
      },
    ],
  },
  {
    title: 'AI',
    items: [
      {
        title: 'AI Chat',
        href: '/admin/dashboard/apps/ai-chat',
        icon: 'Brain',
      },
      {
        title: 'AI Chat V2',
        href: '/admin/dashboard/apps/ai-chat',
        icon: 'BrainCircuit',
        isComing: true,
      },
      {
        title: 'Image Generator',
        href: '/admin/dashboard/apps/ai-image-generator',
        icon: 'Images',
        isNew: true,
      },
    ],
  },
  {
    title: 'Apps',
    items: [
      {
        title: 'Kanban',
        href: '/admin/dashboard/apps/kanban',
        icon: 'SquareKanban',
        isComing: true,
      },
      {
        title: 'Notes',
        href: '/admin/dashboard/apps/notes',
        icon: 'StickyNote',
      },
      {
        title: 'Chats',
        href: '/admin/dashboard/apps/chat',
        icon: 'MessageSquare',
        isDataBadge: '4',
      },
      {
        title: 'Mail',
        href: '/admin/dashboard/apps/mail',
        icon: 'Mail',
        isNew: true,
      },
      {
        title: 'Todo List App',
        href: '/admin/dashboard/apps/todo-list-app',
        icon: 'SquareCheck',
        isNew: true,
      },
      {
        title: 'Tasks',
        href: '/admin/dashboard/apps/tasks',
        icon: 'ClipboardCheck',
      },
      {
        title: 'Calendar',
        href: '/admin/dashboard/apps/calendar',
        icon: 'Calendar',
      },
      {
        title: 'File Manager',
        href: '/admin/dashboard/apps/file-manager',
        icon: 'ArchiveRestore',
        isComing: true,
      },
      {
        title: 'Api Keys',
        href: '/admin/dashboard/apps/api-keys',
        icon: 'Key',
      },
      {
        title: 'POS App',
        href: '/admin/dashboard/apps/pos-system',
        icon: 'Cookie',
        isNew: true,
      },
    ],
  },
  {
    title: 'Pages',
    items: [
      {
        title: 'Users List',
        href: '/admin/dashboard/pages/users',
        icon: 'Users',
      },
      {
        title: 'Profile',
        href: '/admin/dashboard/pages/profile',
        icon: 'User',
      },
      {
        title: 'Settings',
        href: '/admin/dashboard/pages/settings',
        icon: 'Settings',
        items: [
          { title: 'Profile', href: '/admin/dashboard/pages/settings' },
          {
            title: 'Account',
            href: '/admin/dashboard/pages/settings/account',
          },
          {
            title: 'Appearance',
            href: '/admin/dashboard/pages/settings/appearance',
          },
          {
            title: 'Notifications',
            href: '/admin/dashboard/pages/settings/notifications',
          },
          {
            title: 'Display',
            href: '/admin/dashboard/pages/settings/display',
          },
        ],
      },
      {
        title: 'Pricing',
        href: '#',
        icon: 'BadgeDollarSign',
        items: [
          {
            title: 'Column Pricing',
            href: '/admin/dashboard/pages/pricing/column',
          },
          {
            title: 'Table Pricing',
            href: '/admin/dashboard/pages/pricing/table',
          },
          {
            title: 'Single Pricing',
            href: '/admin/dashboard/pages/pricing/single',
          },
        ],
      },
      {
        title: 'Authentication',
        href: '/',
        icon: 'Fingerprint',
        items: [
          { title: 'Login v1', href: '/admin/dashboard/login/v1' },
          { title: 'Login v2', href: '/admin/dashboard/login/v2' },
          {
            title: 'Register v1',
            href: '/admin/dashboard/register/v1',
          },
          {
            title: 'Register v2',
            href: '/admin/dashboard/register/v2',
          },
          {
            title: 'Forgot Password',
            href: '/admin/dashboard/forgot-password',
          },
        ],
      },
      {
        title: 'Error Pages',
        href: '/',
        icon: 'Fingerprint',
        items: [
          { title: '404', href: '/admin/dashboard/pages/error/404' },
          { title: '500', href: '/admin/dashboard/pages/error/500' },
          { title: '403', href: '/admin/dashboard/pages/error/403' },
        ],
      },
    ],
  },
  {
    title: 'Others',
    items: [
      {
        title: 'Components',
        href: '/components',
        icon: 'Component',
        newTab: true,
      },
      {
        title: 'Blocks',
        href: '/blocks',
        icon: 'Component',
        newTab: true,
      },
      {
        title: 'Templates',
        href: '/templates',
        icon: 'Proportions',
        newTab: true,
      },
      {
        title: 'Landing Page',
        href: '/template/cosmic-landing-page-template',
        icon: 'Proportions',
        newTab: true,
      },
      {
        title: 'Shadcn UI Kit Download',
        href: '/pricing',
        icon: 'ClipboardMinus',
        newTab: true,
      },
    ],
  },
];

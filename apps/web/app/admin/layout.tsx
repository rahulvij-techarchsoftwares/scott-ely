import { cookies } from 'next/headers';

import { ThemeProvider } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';

import { ActiveThemeProvider } from '../../components/active-theme';
import { Toaster } from '../../components/ui/toaster';
import '../../styles/globals.css';
// optional
import { fontVariables } from '../lib/fonts';
import GoogleAnalyticsInit from '../lib/ga';
import { DEFAULT_THEME } from '../lib/themes';
import { cn } from '../lib/utils';

// import './globals.css';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeSettings = {
    preset: (cookieStore.get('theme_preset')?.value ??
      DEFAULT_THEME.preset) as any,
    scale: (cookieStore.get('theme_scale')?.value ??
      DEFAULT_THEME.scale) as any,
    radius: (cookieStore.get('theme_radius')?.value ??
      DEFAULT_THEME.radius) as any,
    contentLayout: (cookieStore.get('theme_content_layout')?.value ??
      DEFAULT_THEME.contentLayout) as any,
  };

  const bodyAttributes = Object.fromEntries(
    Object.entries(themeSettings)
      .filter(([_, value]) => value)
      .map(([key, value]) => [
        `data-theme-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
        value,
      ]),
  );

  return (
    <div
      className={cn('bg-background group/layout font-sans', fontVariables)}
      {...bodyAttributes}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <ActiveThemeProvider initialTheme={themeSettings}>
          {children}
          <Toaster />
          <NextTopLoader
            color="var(--primary)"
            showSpinner={false}
            height={2}
            shadow-sm="none"
          />
          {process.env.NODE_ENV === 'production' ? (
            <GoogleAnalyticsInit />
          ) : null}
        </ActiveThemeProvider>
      </ThemeProvider>
    </div>
  );
}

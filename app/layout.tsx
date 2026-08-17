import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frederic Berghmans | Product and Design Leader",
  description: "Product and design leader working across strategy, design, technology, AI, and delivery.",
  metadataBase: new URL("https://www.fredericberghmans.com"),
  other: { "codex-preview": "development" },
  icons: { icon: "/frederic-mark.svg", shortcut: "/frederic-mark.svg" },
};

const themeScript = `try { const preference = localStorage.getItem('fred-theme') || 'system'; if (preference === 'light' || preference === 'dark') document.documentElement.dataset.theme = preference; document.documentElement.dataset.themePreference = preference; } catch (error) {}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}

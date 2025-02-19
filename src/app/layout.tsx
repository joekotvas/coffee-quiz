import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Coffee Personality",
  description:
    "An unscientific, but fun quiz to discover your true coffee personality! Created by Joseph Kotvas at Jokma.com",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} h-[100vh] bg-[url('/app-background.webp')] bg-cover`}
    >
      <body className="px-4 pb-8 pt-16">{children}</body>
    </html>
  );
}

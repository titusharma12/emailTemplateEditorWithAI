import type { Metadata } from "next";

import "./globals.css";
import Provider from "./provider";


export const metadata: Metadata = {
  title: "Email Template Builder - AI Powered Email Template Editor",
  description: "Create stunning email templates effortlessly with our AI-powered editor. Customize, preview, and export responsive designs in minutes.",
  icons: '/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Provider>

        {children}
        </Provider>
      </body>
    </html>
  );
}

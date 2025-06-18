import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Stanley Zheng",
  description: "My personal website :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          {children}
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}

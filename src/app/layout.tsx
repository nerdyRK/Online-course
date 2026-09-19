import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import { MotionConfig } from 'motion/react';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EduBridge India | B2B2C Online University Enrollment Platform',
  description:
    'EduBridge India connects business partners, educational counsellors, and agencies with top UGC-DEB recognized Indian online universities for degree admissions.',
  keywords: [
    'EduBridge India',
    'B2B2C University Enrollment',
    'Online MBA India',
    'UGC DEB Approved Universities',
    'Education Partner Commission',
    'Online MCA Admission',
  ],
  authors: [{ name: 'EduBridge India' }],
  openGraph: {
    title: 'EduBridge India | B2B2C Online University Enrollment Platform',
    description:
      'Enroll students in top UGC-DEB recognized Indian online universities and grow your educational counselling business.',
    url: 'https://edubridgeindia.in',
    siteName: 'EduBridge India',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}

// src/app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'বাংলাদেশের ইতিহাস',
  description: 'ভাষা আন্দোলন থেকে স্বাধীনতা সংগ্রাম পর্যন্ত',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}

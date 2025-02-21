import '../styles/globals.css';
import FontLoader from '../components/FontLoader';

export const metadata = {
  title: 'বাংলাদেশের ইতিহাস',
  description: 'ভাষা আন্দোলন থেকে স্বাধীনতা সংগ্রাম পর্যন্ত বাংলাদেশের ইতিহাস',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <FontLoader>
          {children}
        </FontLoader>
      </body>
    </html>
  );
}

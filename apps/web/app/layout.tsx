import './global.css';
import { Prata } from 'next/font/google';
import { NavigationBar } from '@portfolio/share-ui';

const prataFont = Prata({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Sokhuong Uon | Portfolio',
  description:
    'An experienced software developer aims to build high quality applications. Beyond just functionality and responsiveness, prioritize ensuring applications are accessible and secure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${prataFont.className} h-full`}>
      <body className="w-full h-full">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}

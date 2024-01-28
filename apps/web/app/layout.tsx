import './global.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

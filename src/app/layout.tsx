import { Providers } from './providers'
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Providers>
        <body className='font-sans tracking-wide'>{children}</body>
      </Providers>
    </html>
  );
}

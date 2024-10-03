import '@/app/ui/global.css';
import { monserrat } from './ui/fons';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}


import './globals.css';
import { ReactNode } from 'react';
import { BankProvider } from '../context/BankContext'; 

export default function RootLayout({ children }: { children:ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BankProvider>
          {children}
        </BankProvider>
      </body>
    </html>
  );
}

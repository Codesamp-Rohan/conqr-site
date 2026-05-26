import './globals.css';

import { Manrope, Instrument_Serif } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
});

export const metadata = {
  title: 'Conqr Dashboard',
  description: 'AI Workspace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
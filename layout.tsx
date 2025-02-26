import { Analytics } from '@vercel/analytics/next';
import React from 'react';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>C Programming Website</title>
        <meta name="description" content="Learn C programming from scratch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

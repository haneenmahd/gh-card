import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://gh-card.vercel.app'),
  title: '(Card) - Quickly generate GitHub repository card',
  description: 'Generate and download github repository card in less than a second. Supaa fast!',
  abstract: 'Generate and download github repository card in less than a second. Supaa fast!',
  other: {
    'google-site-verification': 'gMh6iXEuJLTxNWmsDP1PTyFmEdubu7mOHpImHz4_ZAI',
  },
  openGraph: {
    images: ['/og-image.jpeg']
  },
  keywords: ['github', 'repository', 'open source', 'project', 'open source project', 'coding', 'developer', 'social', 'opengraph', 'git', 'version control', 'oss developer']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/icon.jpeg' />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

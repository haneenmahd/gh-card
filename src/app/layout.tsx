import '../styles/globals.css'
import font from '@/theme/font';
import { Metadata } from 'next';
import Provider from '@/components/auth/Provider';
import StyledComponentsRegistry from './registry';
import Layout from '@/components/layout';

export const metadata: Metadata = {
  icons: ['/'],
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
      <body className={font.className}>
        <StyledComponentsRegistry>
          <Layout>
            <Provider>
              {children}
            </Provider>
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

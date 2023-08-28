import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import Layout from "@/components/Layout";

export default function LearnNextApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

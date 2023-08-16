import '@/styles/globals.css'
import Layout from "@/components/Layout";

export default function MyNextApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Layout from "@/components/Layout";
import CartContextProvider from "@/contexts/CartContext";

export default function LearnNextApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </CartContextProvider>
  );
}

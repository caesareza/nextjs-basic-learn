import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Layout from "@/components/Layout";

import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

export default function LearnNextApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

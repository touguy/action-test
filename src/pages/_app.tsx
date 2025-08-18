import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const title = (Component as any).title || '발행포털';

  return (
    <Layout title={title}>
      <Component {...pageProps} />
    </Layout>
  );
}

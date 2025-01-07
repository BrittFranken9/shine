import "@/styles/globals.css";
import Layout from "@/components/Layout/dark_mode";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

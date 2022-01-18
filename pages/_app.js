import "../styles/globals.css";
import Layout from "../components/Layout";
//
// import { useEffect } from "react";
import Script from "next/script";
// import { useRouter } from "next/router";
// import * as gtag from "../lib/gtag";
//
function MyApp({ Component, pageProps }) {
  //
  return (
    <Layout>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

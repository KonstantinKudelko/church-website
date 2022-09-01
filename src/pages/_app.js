import "@styles/fonts.css";
import "@styles/typography.css";
import "@styles/palette.css";
import "@styles/global.css";

import Script from "next/script";
import { GTM_KEY } from "@constants";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { gtmVirtualPageView } from "@helpers/gtm.helper";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Sendpulse auth
    const body = new FormData();
    body.append("grant_type", "client_credentials");
    body.append("client_id", "6bacec612805a5b964f90e32b66bbad4");
    body.append("client_secret", "78155d1dbeae51a870ce0af55b70add4");

    async function sendPulseAuth() {
      const response = await fetch("https://api.sendpulse.com/oauth/access_token", {
        method: "POST",
        body,
      });
      const data = await response.json();
      localStorage.setItem("token", data.access_token);
    }

    sendPulseAuth();

    const mainDataLayer = {
      url: router.pathname,
      pageTypeName: pageProps.page || null,
    };

    gtmVirtualPageView(mainDataLayer);
  }, [router.pathname, pageProps.page]);

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_KEY}');
      `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

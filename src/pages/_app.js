import "@styles/fonts.css";
import "@styles/typography.css";
import "@styles/palette.css";
import "@styles/global.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

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

    // Gtag logic
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

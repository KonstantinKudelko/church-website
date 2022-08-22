import "@styles/fonts.css";
import "@styles/typography.css";
import "@styles/palette.css";
import "@styles/global.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    async function sendPulseAuth() {
      const response = await fetch("https://api.sendpulse.com/oauth/access_token", {
        method: "POST",
        body: JSON.stringify({
          grant_type: "client_credentials",
          client_id: "704f821512042db7e240dfff4c73cb0e",
          client_secret: "f0c12e1762f6764954329c6fcb2d5578",
        }),
      });
      const data = await response.json();
      console.log(data);
    }

    sendPulseAuth();
  }, []);

  return <Component {...pageProps} />;
}

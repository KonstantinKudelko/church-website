import "@styles/fonts.css";
import "@styles/typography.css";
import "@styles/palette.css";
import "@styles/global.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
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
  }, []);

  return <Component {...pageProps} />;
}

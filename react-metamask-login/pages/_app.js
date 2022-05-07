import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="lzAt4auCwFxQjJFJiT6MIueOiMi1g4b15StDYA0N"
      serverUrl="https://gs1qa4lf0rmt.usemoralis.com:2053/server/"
    >
      {<Component {...pageProps} />}
    </MoralisProvider>
  );
}

export default MyApp;

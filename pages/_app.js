import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
}

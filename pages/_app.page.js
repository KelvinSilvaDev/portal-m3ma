import Menu from "../src/components/Menu/Menu";
import { GlobalStyle } from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

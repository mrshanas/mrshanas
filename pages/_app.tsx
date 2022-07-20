import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Navbar, Footer } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default MyApp;

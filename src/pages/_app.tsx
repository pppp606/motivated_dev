import "../config/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  ) : (
    <div />
  );
}

export default App;

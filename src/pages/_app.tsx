import "../config/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@material-tailwind/react";
import { AuthContextProvider } from "../containers/authContextProvider";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  // google fonts
  const materialSymbols =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <>
      <Head>
        <link rel="stylesheet" href={materialSymbols} />
      </Head>
      <ThemeProvider>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  ) : (
    <div />
  );
}

export default App;

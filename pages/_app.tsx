import type { AppProps } from "next/app";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function setInitialThemeFromStorageOrTime() {
  const stored = typeof window !== "undefined" ? localStorage.getItem("kaffeepedia-theme") : null;
  if (stored === "light" || stored === "dark") {
    document.documentElement.setAttribute("data-theme", stored);
    return;
  }
  const hour = new Date().getHours();
  const theme = hour >= 7 && hour <= 18 ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Set initial theme once on client
    setInitialThemeFromStorageOrTime();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

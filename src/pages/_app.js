import "@/styles/globals.css";
import LayoutD from '@/components/Layout/dark_mode'; // Dark mode layout
import LayoutL from '@/components/Layout/light_mode'; // Light mode layout
import { useRouter } from 'next/router';
import React from "react";

function App({ Component, pageProps }) {
  const router = useRouter();

  const getLayout = (path) => {
    // Gebruik dark en light mode layouts afhankelijk van de route
    switch (path) {
      // Dark mode pagina's
      case '/dark_mode/home':
      case '/dark_mode/nieuw':
      case '/dark_mode/connecties':
      case '/dark_mode/statistieken':
      case '/dark_mode/profiel':
      case '/dark_mode/meldingen':
      case '/dark_mode/instellingen':
        return LayoutD;

      // Light mode pagina's
      case '/light_mode/home':
      case '/light_mode/nieuw':
      case '/light_mode/connecties':
      case '/light_mode/statistieken':
      case '/light_mode/profiel':
      case '/light_mode/meldingen':
      case '/light_mode/instellingen':
        return LayoutL;

      default:
        return React.Fragment; // Geen layout toepassen
    }
  };

  const LayoutComponent = getLayout(router.pathname);

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default App;

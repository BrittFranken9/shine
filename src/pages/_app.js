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
      case '/dark_mode/favorites':
      case '/dark_mode/map':
      case '/dark_mode/stations/[stationId]':
        return LayoutD;

      // Light mode pagina's
      case '/light_mode/home':
      case '/light_mode/favorites':
      case '/light_mode/map':
      case '/light_mode/stations/[stationId]':
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
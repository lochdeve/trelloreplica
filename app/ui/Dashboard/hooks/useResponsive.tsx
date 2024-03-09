import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<any>(null);

  useEffect(() => {
    setIsSmallScreen(window.matchMedia('(max-width: 1540px)').matches);
    const mediaQuery = window.matchMedia('(max-width: 1540px)');

    const handleMediaQueryChange = (e: any) => {
      setIsSmallScreen(e.matches);
    };

    // Agrega el event listener
    mediaQuery.addListener(handleMediaQueryChange);

    // Elimina el event listener al desmontar el componente
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []); // Ejecuta solo una vez al montar el componente
  return { isSmallScreen };
};

export default useResponsive;

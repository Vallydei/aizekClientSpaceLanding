import React, { useEffect, useState } from 'react';
import NavBarDesktop from './NavBarDesctop';
import NavBarBurger from './NavBarBurger';

export default function OptionNavbar(): JSX.Element {
  const [deviceWidth, setDeviceWidth] = useState<boolean>(window.innerWidth > 960);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
       setDeviceWidth(screenWidth > 960);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{deviceWidth ? <NavBarDesktop /> : <NavBarBurger />}</>;
}

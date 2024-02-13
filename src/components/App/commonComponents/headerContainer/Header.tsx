import React, { useEffect, useState } from 'react';
import NavBarDesktop from './navBarDesctop/NavBarDesctop';
import NavBarBurger from './navBarMob/NavBarBurger';
import './headerStyles.css';

export type Section = {
  id: string;
  label: string;
};

export default function Header(): JSX.Element {
  const [deviceWidth, setDeviceWidth] = useState<boolean>(window.innerWidth > 960);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  return (
    <header className={`${scrolled ? 'scrolled' : ''}`}>
      {deviceWidth ? <NavBarDesktop /> : <NavBarBurger />}
    </header>
  );
}

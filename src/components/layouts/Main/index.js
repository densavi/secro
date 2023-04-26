import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Header, Footer, MobileMenu} from '~/containers';
const Main = ({isHeaderLight = false, withHeaderOverlay = false, children}) => {
  const [isActive, setIsActive] = useState(false);
  const [bodyClasses, setBodyClasses] = useState('');

  useEffect(() => {
    document.body.className = bodyClasses;
  }, [bodyClasses]);

    const MenuOpen = () => {
      if (isActive) {
      setBodyClasses('');
      } else {
      setBodyClasses('body_hidden');
      }
      setIsActive(!isActive);
    }



  return (
    <>
      <Header
        isHeaderLight={isHeaderLight}
        withHeaderOverlay={withHeaderOverlay}
        isOpenMenu={isActive}
        onMenuOpen={MenuOpen}
      />
      <MobileMenu
        isOpenMenu={isActive}
        onMenuOpen={MenuOpen}
      />
      <main>{!!children && children}</main>
      <Footer />
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  isHeaderLight: PropTypes.bool,
  withHeaderOverlay: PropTypes.bool,
};

export default Main;

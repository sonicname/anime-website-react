import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const ShareLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default memo(ShareLayout);

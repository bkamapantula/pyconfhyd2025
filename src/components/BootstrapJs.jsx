'use client';

import { useEffect } from 'react';

const BootstrapJs = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return null;
};

export default BootstrapJs;

'use client';

import { useEffect } from 'react';

export default function BootstrapJs() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return null;
}

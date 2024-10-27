import Link from 'next/link';
import React from 'react';

import IconComponent from '@/components/Icon';
import { CONFERENCE, SOCIALS } from '@/details';

const Footer = () => {
  return (
    <footer className="bg-primary-gradient text-light px-3">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <ul className="nav col-md-6 col-12 py-2">
            {SOCIALS.map((item, index) => (
              <Link
                key={index}
                className="mx-1"
                href={item.url}
                target="_blank"
                aria-label={item.ariaLabel}
              >
                <IconComponent name={item.name} className="text-light" />
              </Link>
            ))}
          </ul>
          <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center py-2">
            {CONFERENCE.copyrightTitle}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

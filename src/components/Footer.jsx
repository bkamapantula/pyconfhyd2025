import Link from 'next/link';
import React from 'react';

import IconComponent from '@/components/Icon';
import { CONFERENCE, SOCIALS } from '@/details';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center py-3">
          <ul className="nav col-md-4">
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
          <div className="col-md-4 d-flex justify-content-end">
            {CONFERENCE.copyrightTitle}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Nav from '../components/nav';

import useStyles from '../styles/layout.styles';

const LINKS = [
    { href: '/', as: '/', label: 'Home' },
    { href: '/[locale]/one', as: '/en/one', label: 'One' },
    { href: '/[locale]/two', as: '/en/two', label: 'Two' },
    { href: '/[locale]/three', as: '/en/three', label: 'Three' },
];

export default (props) => {
    const classes = useStyles({
        fontFamily: 'monospace',
    });

    return (
        <>
            <ul className={classes.nav}>
              {LINKS.map((link, i) => (
                  <li key={i}>
                      <Link href={link.href} as={link.as}>
                          <a>
                              {link.label}
                          </a>
                      </Link>
                  </li>
              ))}
            </ul>
            <div className={classes.body}>
                {props.children}
            </div>
            <div className={classes.main}>
                I should be BLUE or GREEN, never RED?
            </div>
        </>
    );
};

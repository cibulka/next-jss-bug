import React from 'react'
import Link from 'next/link'

const links = [
    { href: '/', as: '/', label: 'Home' },
    { href: '/[locale]/one', as: '/en/one', label: 'One' },
    { href: '/[locale]/two', as: '/en/two', label: 'Two' },
    { href: '/[locale]/three', as: '/en/three', label: 'Three' },
];

const Nav = (props) => (
  <ul className={props.className}>
    {links.map((link, i) => (
        <li key={i}>
            <Link href={link.href} as={link.as}>
                <a>
                    {link.label}
                </a>
            </Link>
        </li>
    ))}
  </ul>
)

export default Nav

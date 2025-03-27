"use client";
import './Header.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul>
          <li className={pathname === '/' ? 'active' : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === '/blog' ? 'active' : ''}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={pathname === '/reviews' ? 'active' : ''}>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li className={pathname === '/about' ? 'active' : ''}>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <img src='./images/logo.png' width={'100px'} height={'75px'}></img>
      </nav>
    </header>
  );
}

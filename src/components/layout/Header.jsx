'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/conqr.png'
import PrimaryButton from '../ui/PrimaryButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur z-[99]">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 z-[99]">
        <Link
          href="/"
          className="invert-100"
        >
          <Image src={logo} alt="Logo" className="h-10 w-fit" />
        </Link>
      </div>
    </header>
  );
}
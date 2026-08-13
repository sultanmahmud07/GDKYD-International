'use client';

import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {ComponentProps} from 'react';

export default function NavLink({href, className, ...rest}: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        ` ${className}`,
        isActive
          ? 'font-semibold text-[#1976D3]'
          : ''
      )}
      href={href}
      {...rest}
    />
  );
}

import Link, { LinkProps as NextLinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

export type CustomLinkProps = PropsWithChildren &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: NextLinkProps['href'];
    openNewTab?: boolean;
  };

export function CustomLink({
  children,
  href,
  openNewTab,
  className,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      target={openNewTab ? '_blank' : '_self'}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

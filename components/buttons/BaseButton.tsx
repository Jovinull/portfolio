'use client';

import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import type { BaseButtonProps } from '@/types/components/button';

function isExternalHref(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  );
}

function isHashHref(href: string) {
  return href.startsWith('#');
}

export default function BaseButton({
  href,
  onClick,
  type = 'button',
  children,
  icon,
  startIcon,
  endIcon,
  variant = 'theme',
  download = false,
  isIconOnly = false,
  ariaLabel,
  className = '',
  disabled = false,
  target,
  rel,
}: BaseButtonProps) {
  const classes = clsx(
    'btn',
    `btn-${variant}`,
    isIconOnly ? 'p-2' : 'px-6 py-2',
    disabled && 'pointer-events-none opacity-60',
    className,
  );

  const computedRel = target === '_blank' ? (rel ?? 'noreferrer noopener') : rel;

  const resolvedEndIcon =
    endIcon ?? (icon ? <Image src={icon} alt="" aria-hidden="true" className="h-5 w-5" /> : null);

  const content = (
    <>
      {startIcon ? <span className={clsx(!isIconOnly && 'shrink-0')}>{startIcon}</span> : null}
      {isIconOnly ? null : <span className="truncate">{children}</span>}
      {resolvedEndIcon ? (
        <span className={clsx(!isIconOnly && 'shrink-0')}>{resolvedEndIcon}</span>
      ) : null}
    </>
  );

  if (href) {
    const useAnchor = download || isExternalHref(href) || isHashHref(href) || target === '_blank';

    if (useAnchor) {
      return (
        <a
          href={href}
          className={classes}
          download={download || undefined}
          target={target}
          rel={computedRel}
          aria-label={isIconOnly ? ariaLabel : undefined}
        >
          {isIconOnly ? (startIcon ?? resolvedEndIcon) : content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={isIconOnly ? ariaLabel : undefined}>
        {isIconOnly ? (startIcon ?? resolvedEndIcon) : content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={isIconOnly ? ariaLabel : undefined}
    >
      {isIconOnly ? (startIcon ?? resolvedEndIcon) : content}
    </button>
  );
}

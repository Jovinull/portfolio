'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Se tiver hash (/#work, /#contact), deixa o browser rolar até a âncora.
    if (typeof window === 'undefined') return;
    if (window.location.hash) return;

    // Garante topo após a navegação/render.
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname]);

  return null;
}

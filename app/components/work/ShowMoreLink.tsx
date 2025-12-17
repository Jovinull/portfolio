'use client';

import BaseButton from '@/app/components/buttons/BaseButton';

export default function ShowMoreLink() {
  return (
    <div className="my-20 flex justify-center">
      <BaseButton href="/#work" variant="theme" className="px-10 py-3">
        Mostrar Mais
      </BaseButton>
    </div>
  );
}

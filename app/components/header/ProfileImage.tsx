import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function ProfileImage() {
  return (
    <div className="mb-3">
      <Image
        src={assets.profile_img}
        alt="Foto de perfil de Felipe Jovino"
        width={128}
        height={128}
        priority
        className="w-32 rounded-full"
      />
    </div>
  );
}

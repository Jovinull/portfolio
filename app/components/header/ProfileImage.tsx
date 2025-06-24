import { assets } from '@/assets/assets';
import Image from 'next/image';

const ProfileImage = () => (
  <div>
    <Image
      src={assets.profile_img}
      alt="Foto de perfil de Felipe dos Santos (Jovino)"
      className="w-32 rounded-full"
    />
  </div>
);

export default ProfileImage;

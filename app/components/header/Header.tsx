'use client';

import React from 'react';
import ProfileImage from './ProfileImage';
import Greeting from './Greeting';
import Title from './Title';
import Description from './Description';
import ActionButtons from '@/app/components/buttons/ActionButtons';
import Subtitle from './Subtitle';

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <ProfileImage />
      <Greeting />
      <Title />
      <Subtitle />
      <Description />
      <ActionButtons />
    </div>
  );
};

export default Header;

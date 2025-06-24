'use client';

import React from 'react';
import ProfileImage from './ProfileImage';
import Greeting from './Greeting';
import Title from './Title';
import Description from './Description';
import ActionButtons from './ActionButtons';

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <ProfileImage />
      <Greeting />
      <Title />
      <Description />
      <ActionButtons />
    </div>
  );
};

export default Header;

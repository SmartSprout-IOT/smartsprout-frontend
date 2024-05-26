import React from 'react';
import { HeaderUserProfile } from '../components/userProfile/HeaderUserProfile';
import { BodyUserProfile } from '../components/userProfile/BodyUserProfile';

export const UserProfile = () => {
  return (
    <div>
      <HeaderUserProfile />
      <BodyUserProfile />
    </div>
  );
};

export default UserProfile;

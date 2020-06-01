import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { MdLock } from 'react-icons/md';

import { TopMenu } from './styles';

const TopMenuProfile = () => {
  const signInWithEmailAndPassword = localStorage.getItem(
    'signInWithEmailAndPassword'
  );

  return (
    <>
      <TopMenu>
        <NavLink exact to="/home/profile">
          <IoMdPerson size={30} />
        </NavLink>

        <NavLink to="/home/profile/address">
          <FaMapMarkerAlt size={30} />
        </NavLink>

        {signInWithEmailAndPassword && (
          <NavLink to="/home/profile/secret">
            <MdLock size={30} />
          </NavLink>
        )}
      </TopMenu>
    </>
  );
};

export default TopMenuProfile;

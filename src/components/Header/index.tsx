import React from 'react';
import { FaSearch as SearchIcon, FaBell as BellIcon } from 'react-icons/fa';

import profileImage from '../../assets/images/profile.jpeg';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <h1>Dashboard</h1>

      <div>
        <SearchIcon color="#565BA1" size={20} />

        <span>
          <BellIcon color="#565BA1" size={20} />
        </span>

        <img src={profileImage} alt="Profile" />
        <p>Sup3r-Us3r</p>
      </div>
    </Container>
  );
}

export default Header;

import React from 'react';
import { RiDashboard2Fill as DashboardIcon } from 'react-icons/ri';
import { AiFillStar as StarIcon } from 'react-icons/ai';
import { MdSecurity as SecutiryIcon } from 'react-icons/md';
import {
  FaShoppingBag as BagIcon,
  FaBox as BoxIcon,
  FaBriefcase as CaseIcon,
} from 'react-icons/fa';

import { Container } from './styles';

const Menu = () => {
  return (
    <Container>
      <DashboardIcon color="#CDCEDE" size={25} />
      <StarIcon color="#7F85DE" size={25} />
      <SecutiryIcon color="#7F85DE" size={23} />
      <BagIcon color="#7F85DE" size={23} />
      <BoxIcon color="#7F85DE" size={20} />
      <CaseIcon color="#7F85DE" size={23} />
    </Container>
  );
}

export default Menu;

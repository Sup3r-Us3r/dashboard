import React from 'react';
import { AiOutlinePaperClip as ClipIcon } from 'react-icons/ai';
import { FiMoreHorizontal as MoreIcon } from 'react-icons/fi';
import {
  BiCheckboxChecked as CheckedIcon,
  BiTimeFive as TimeIcon
} from 'react-icons/bi';

import profileImage from '../../assets/images/profile.jpeg';

import {
  Container,
  PendingBox,
  PendingLabel,
  PendingAction,
  PendingIconBox,
  PendingProgressBox,
  Avatars,
} from './styles';

const Pending = () => {
  return (
    <Container>
      <h4>Pending</h4>

      <PendingBox>
        <PendingLabel>
          <p>Finance App Exploration</p>
          <p>Iconspace Team</p>
        </PendingLabel>

        <PendingAction>
          <PendingIconBox>
            <ClipIcon color="#444a7a" size={18} />
            <span>13</span>
          </PendingIconBox>

          <PendingIconBox>
            <CheckedIcon color="#444a7a" size={18} />
            <span>4/5</span>
          </PendingIconBox>

          <button>
            <TimeIcon color="#444a7a" size={18} />
            <span>14 days left</span>
          </button>
        </PendingAction>

        <PendingProgressBox>
          <div>
            <span></span>
          </div>

          <span>85%</span>
        </PendingProgressBox>

        <Avatars>
          <img src={profileImage} alt="Avatar" />
          <img src={profileImage} alt="Avatar" />
          <img src={profileImage} alt="Avatar" />
        </Avatars>

        <MoreIcon color="#444a7a" size={18} />
      </PendingBox>
    </Container>
  );
}

export default Pending;

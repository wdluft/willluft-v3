import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { SocialsWrapper } from '../styles/elements';

const Socials = () => (
  <SocialsWrapper>
    <a
      href="https://twitter.com/iamwilldl"
      target="_blank"
      rel="noopener noreferrer"
      className="twitter"
    >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>

    <a
      href="https://github.com/wdluft"
      target="_blank"
      rel="noopener noreferrer"
      className="github"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/in/william-luft-42ab9258/"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
  </SocialsWrapper>
);

export default Socials;

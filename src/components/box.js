import React from 'react';
import PropTypes from 'prop-types';
import { ContactBoxWrapper } from '../styles/elements';

const ContactBox = ({ value, link }) => (
  <ContactBoxWrapper>
    <a
      href={link}
      target={link.includes('#') ? '' : '_blank'}
      rel={link.includes('#') ? '' : 'noopener noreferrer'}
    >
      <h4>{value}</h4>
    </a>
  </ContactBoxWrapper>
);

ContactBox.propTypes = {
  link: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ContactBox;

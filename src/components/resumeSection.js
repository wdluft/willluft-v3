import React from 'react';
import PropTypes from 'prop-types';
import { ResumeSectionWrapper } from '../styles/elements';
import ResumeItem from './resumeItem';

const resumeSection = ({ section, index }) => {
  console.log(section);
  return (
    <ResumeSectionWrapper id={index === 0 ? 'Jobs' : 'Education'}>
      <h1>{index === 0 ? 'Jobs' : 'Education'}</h1>
      {section.map((position, i) => (
        <ResumeItem key={position.id} position={position} />
      ))}
    </ResumeSectionWrapper>
  );
};

resumeSection.propTypes = {
  section: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default resumeSection;

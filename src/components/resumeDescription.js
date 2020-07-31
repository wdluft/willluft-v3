import React from 'react';
import { resume } from '../styles/sectionInfo';
import Box from './box';

const ResumeDescription = () => {
  const resumeSections = [
    { title: 'Jobs', id: 11 },
    { title: 'Education', id: 12 },
    { title: 'Skills', id: 13 },
  ];

  return (
    <div>
      <h1>Resume</h1>
      <p>
        Below is my professional resume, listing my recent jobs, education, and
        skills.{' '}
      </p>
      {resumeSections.map(section => (
        <Box
          value={section.title}
          link={`#${section.title}`}
          key={section.id}
        />
      ))}
    </div>
  );
};

export default ResumeDescription;

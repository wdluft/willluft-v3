import React from 'react';
import { projects } from '../styles/sectionInfo';
import Box from './box';

const ProjectsDescription = () => (
  <div>
    <h1>Projects</h1>
    <p>Below are some of the websites and web projects that I've built.</p>
    {projects.map(project => (
      <Box value={project.title} link={`#${project.img}`} key={project.id} />
    ))}
  </div>
);

export default ProjectsDescription;

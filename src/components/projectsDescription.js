import React from 'react';
import { projects } from '../styles/sectionInfo';

const ProjectsDescription = () => (
  <div>
    <h1>Projects</h1>
    <p>Below are some of the websites and web projects that I've built.</p>
    {projects.map(project => (
      <p key={project.id}>
        <a href={`#${project.title}`}>{project.title}</a>
      </p>
    ))}
  </div>
);

export default ProjectsDescription;

import React from 'react';
import { projects } from '../styles/sectionInfo';

// TODO: create wrapper giving section 100vh,
// each project title should link to project section below

const ProjectsDescription = () => (
  <div>
    <h1>Projects</h1>
    <p>Below are some of the websites and web projects that I've built.</p>
    <ul>
      {projects.map(project => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  </div>
);

export default ProjectsDescription;

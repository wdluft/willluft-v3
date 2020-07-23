import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectsDescription from '../components/projectsDescription';
import Project from '../components/project';
import { projects } from '../styles/sectionInfo';

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <ProjectsDescription />
    {projects.map(project => (
      <Project key={project.id} project={project} />
    ))}
  </Layout>
);

export default Projects;

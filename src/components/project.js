import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ProjectWrapper } from '../styles/elements';

const Project = ({ project }) => (
  <ProjectWrapper className="primary">
    <h2>{project.title}</h2>
    <a href={project.github} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a href={project.siteURL} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLink} size="2x" />
    </a>
  </ProjectWrapper>
);

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;

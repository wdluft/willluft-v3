import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Img from 'gatsby-image';
import { ProjectsSectionWrapper } from '../styles/elements';

const Project = ({ project, image }) => {
  let projectImg;
  if (project.img === 'ManaMaker') {
    projectImg = image.ManaMaker.childImageSharp.fluid;
  } else if (project.img === 'RandomCommander') {
    projectImg = image.RandomCommander.childImageSharp.fluid;
  } else if (project.img === 'BecomeByDoing') {
    projectImg = image.BecomeByDoing.childImageSharp.fluid;
  } else {
    projectImg = image.TomatoTimer.childImageSharp.fluid;
  }

  return (
    <ProjectsSectionWrapper id={project.img}>
      <div>
        <h2>{project.title}</h2>
        <a href={project.siteURL} target="_blank" rel="noopener noreferrer">
          <Img fluid={projectImg} />
        </a>
        <p>{project.desc}</p>
        <div className="projectLinks">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={project.siteURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} size="2x" />
          </a>
        </div>
      </div>
    </ProjectsSectionWrapper>
  );
};
Project.propTypes = {
  project: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
};

export default Project;

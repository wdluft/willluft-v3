import React from 'react';

import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectsDescription from '../components/projectsDescription';
import Project from '../components/project';
import { projects } from '../styles/sectionInfo';
import { ProjectsSectionWrapper } from '../styles/elements';

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <ProjectsSectionWrapper>
      <ProjectsDescription />
    </ProjectsSectionWrapper>
    {projects.map(project => (
      <Project key={project.id} project={project} image={data} />
    ))}
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1080) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    ManaMaker: file(relativePath: { eq: "ManaMaker.png" }) {
      ...fluidImage
    }
    RandomCommander: file(relativePath: { eq: "Random-Commander.png" }) {
      ...fluidImage
    }
    BecomeByDoing: file(relativePath: { eq: "Home-Become-By-Doing.png" }) {
      ...fluidImage
    }
    TomatoTimer: file(relativePath: { eq: "Tomato-Timer.png" }) {
      ...fluidImage
    }
  }
`;

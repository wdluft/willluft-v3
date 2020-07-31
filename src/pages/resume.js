import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { resume } from '../styles/sectionInfo';
import { ResumeSectionWrapper } from '../styles/elements';
import ResumeSection from '../components/resumeSection';
import ResumeDescription from '../components/resumeDescription';
import ResumeSkills from '../components/resumeSkills';

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <ResumeSectionWrapper>
      <ResumeDescription />
    </ResumeSectionWrapper>
    {resume.map((item, i) => (
      <ResumeSection key={i * 5} section={item} index={i} />
    ))}
    <ResumeSectionWrapper id="Skills">
      <ResumeSkills />
    </ResumeSectionWrapper>
  </Layout>
);

export default Resume;

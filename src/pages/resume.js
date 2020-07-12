import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { resumeInfo } from '../styles/resumeInfo';
import { ResumeSection } from '../styles/elements';
import ResumeItem from '../components/resumeItem';

const Resume = () => {
  const [resume] = useState(resumeInfo);

  return (
    <Layout>
      <SEO title="Resume" />
      <h1>Resume</h1>
      <ResumeSection>
        {resume.map(item => (
          <ResumeItem key={item.id} position={item} />
        ))}
      </ResumeSection>
    </Layout>
  );
};

export default Resume;

import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ContactWrapper } from '../styles/elements';
import ContactBoxes from '../components/contactBoxes';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactWrapper>
      <h1>Contact</h1>
      <ContactBoxes />
    </ContactWrapper>
  </Layout>
);

export default Contact;

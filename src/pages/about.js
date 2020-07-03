import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>About</h1>
      <p>I build websites, do customer support, and play sports.</p>
    </div>
  </Layout>
);

export default IndexPage;

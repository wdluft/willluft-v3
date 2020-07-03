import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h3>Hi, I'm</h3>
      <h1>WILL LUFT</h1>
      <p>I build websites, do customer support, and play sports.</p>
    </div>
  </Layout>
);

export default IndexPage;

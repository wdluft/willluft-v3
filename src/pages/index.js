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
      <p>
        I'm a Customer Support Specialist for{' '}
        <a
          href="https://www.donorschoose.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DonorsChoose
        </a>
        , helping teachers and donors with any questions they have.
      </p>
      <p>
        I am an aspiring web developer, focusing on HTML, CSS, JavaScript, and
        React. Below are some of the projects I've built.
      </p>
      <p>
        To get my thoughts out of my head, I write for my blog,{' '}
        <a
          href="https://www.becomebydoing.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become by Doing
        </a>
        . I'll write about anytihng ranging from web development, to what's
        going on in the world, to my personal philosophy.
      </p>
      <p>
        Please <Link to="/contact">reach out to me</Link> if you'd like to chat
        or build something together.
      </p>
    </div>
  </Layout>
);

export default IndexPage;

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page doesn't exist</p>
    <Image />
  </Layout>
)

export default NotFoundPage

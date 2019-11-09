import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p><a href="https://orcid.org/0000-0002-5631-1532">ORCiD</a></p>
    <p><a href="https://github.com/gkostin1966">GitHub</a></p>
    <p><a href="https://mcommunity.umich.edu/#profile:gkostin">MCommunity</a></p>
    <p><a href="https://linkedin.com/in/gkostin">LinkedIn</a></p>
    <p><a href="https:/www.upwork.com/o/profiles/users/_~010c9cb8087ad31e55/">Upwork</a></p>
  </Layout>
)

export default IndexPage

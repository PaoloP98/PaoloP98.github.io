import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

interface BlogProps {
    data:any
  }
const BlogPage = ({data}:BlogProps) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map((node:any) => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
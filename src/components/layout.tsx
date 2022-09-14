import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import * as styles from "./layout.module.css";


interface LayoutProps {
    pageTitle: string
    children?: any
  }

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <header className={styles.siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={styles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
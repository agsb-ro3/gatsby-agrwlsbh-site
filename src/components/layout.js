/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"

import "../styles/global.css"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        {children}
        <footer className="w-full max-h-[780px] h-full bg-blue-200 left-0 right-0 bottom-0 top-0">
          <div className="flex flex-col lg:flex-row xl:flex-row sm:flex-col justify-between items-center gap-4 flex-nowrap p-4 m-2 space-x-auto space-y-2">
            <span className="inline-flex text-stone-700">
              © {new Date().getFullYear()}&nbsp;&middot;&nbsp;
              <span className="font-bold text-blue-700 hover:text-stone-600 ease-in duration-300 delay-75">
                Aggarwal&nbsp;Sabha&nbsp;-&nbsp;Rohini
              </span>
            </span>
            <span className="inline-flex text-stone-700">
              Built by&nbsp;
              <span className="text-gray-700 font-bold  hover:underline decoration-2 underline-offset-4 ease-in duration-300 delay-75">
                <a
                  href="https://yourishanvelle.dev/"
                  title="Author"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ishan Velle
                </a>
                &nbsp;
              </span>
              with&nbsp;
              <a
                href="https://www.gatsbyjs.com"
                title="Gatsby"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-purple-700 hover:text-stone-600 ease-in duration-300 delay-75 font-bold">
                  Gatsby
                </span>
                <span>&nbsp;&amp;&nbsp;</span>
                <span className="text-cyan-700 hover:text-stone-600 ease-in duration-300 delay-75 font-bold">
                  <a
                    href="https://tailwindcss.com/"
                    title="Gatsby"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tailwind
                  </a>
                </span>
              </a>
            </span>
            <div>
              <ul className="inline-flex flex-col flex-nowrap lg:flex-row xl:flex-row sm:flex-col justify-between items-center gap-2 lg:gap-4 sm:gap-2 space-x-2 space-y-auto capitalize">
                <li className="hover:underline underline-offset-4 decoration-2 decoration-purple-700 ease-in duration-300 delay-75">
                  <Link to="/" title="home">
                    Home
                  </Link>
                </li>
                <li className="hover:underline underline-offset-4 decoration-2 decoration-purple-700 ease-in duration-300 delay-75">
                  <Link to="/about" title="about">
                    About
                  </Link>
                </li>
                <li className="hover:underline underline-offset-4 decoration-2 decoration-purple-700 ease-in duration-300 delay-75">
                  <Link to="/contact/#contact-us" title="membership">
                    Membership
                  </Link>
                </li>
                <li className="hover:underline underline-offset-4 decoration-2 decoration-purple-700 ease-in duration-300 delay-75">
                  <Link to="/404" title="ads">
                    Ads
                  </Link>
                </li>
                <li className="hover:underline underline-offset-4 decoration-2 decoration-purple-700 ease-in duration-300 delay-75">
                  <Link to="/404" title="terms">
                    Terms
                  </Link>
                </li>
                <li className="hover:underline underline-offset-4 decoration-2 decoration-purple-700 ease-in duration-300 delay-75">
                  <Link href="/404" title="privacy">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout

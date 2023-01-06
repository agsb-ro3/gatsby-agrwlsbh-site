import { Link } from "gatsby"
import * as React from "react"
import { HiOutlineChevronDoubleRight } from "react-icons/hi"
import { useTypewriter } from "react-simple-typewriter"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.css"

const IndexPage = () => {
  const [Text] = useTypewriter({
    words: [
      "May Maharaja Agrasen always be there to guide us towards a path that is a progressive one for our society.",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <Layout>
      <main id="home" className="w-full min-h-screen bg-[gold]">
        <section className="py-24 flex items-center min-h-screen justify-center">
          <div className="mx-auto max-w-[43rem]">
            <div className="text-center">
              <p className="text-xl font-bold leading-8 font-montserrat tracking-widest text-[dimgray] animate-bounce">
                Welcome,&nbsp;visitor&nbsp;!
              </p>
              <h1 className="mt-3 text-[4rem] font-bold leading-[4rem] tracking-tight font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-slate-400 to-slate-900 ... hover:scale-110 ease-in-out duration-300">
                Aggarwal Sabha - Rohini&nbsp;
                <span className="font-[poppins] bg-clip-text text-transparent  bg-gradient-to-r from-slate-900 to-slate-300 ... font-extrabold">
                  .
                </span>
              </h1>
              <p className="mt-3 text-sm mx-3 my-auto leading-relaxed bg-blue-200 rounded-3xl p-4 uppercase text-slate-800 shadow-lg shadow-[#111] font-medium font-montserrat">
                {Text}
              </p>
            </div>
            <br />
            <div className="mt-6 flex items-center py-12 justify-center gap-4">
              <Link href="/work" title="our work">
                <div className="shadow-lg shadow-[#111] bg-gradient-to-r from-gray-300 via-slate-300 to-slate-500 ... rounded-full bg-slate p-6 cursor-pointer hover:scale-110 ease-in duration-300 delay-75">
                  <HiOutlineChevronDoubleRight
                    size={32}
                    className="m-auto text-emerald-600"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

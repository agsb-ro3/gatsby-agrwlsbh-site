import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="w-full min-h-screen bg-[gold] flex flex-col justify-center items-center gap-4 space-x-auto space-y-6 lg:space-y-4 sm:space-y-8 flex-nowrap">
      <h1 className="p=2 mx-6 mt-4 font-specialelite drop-shadow-2xl">
        404: Not Found
      </h1>
      <p className="p-2 mx-6 mt-4 leading-6 drop-shadow-2xl shadow-md shadow-[#111] rounded-lg text-center">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <button
        tabIndex={0}
        className="focus-within:outline-none border-2 border-[#111] bg-blue-200 hover:border-purple-700 font-specialelite font-medium3 hover:bg-[#111] hover:text-white ease-in duration-300 delay-100"
      >
        <Link to="/">
          <span className="drop-shadow-2xl">Back to the Homepage</span>
        </Link>
      </button>
    </section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

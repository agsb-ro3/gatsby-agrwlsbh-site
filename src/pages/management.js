import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  const people = [
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      role: "POST",
      picture: "/static/pics/avataaars_1_male.png",
    },
  ]

  return (
    <Layout>
      <div
        id="management"
        className="w-full h-full md:h-screen px-2 flex items-center py-16 overflow-y-scroll overflow-x-hidden no-scrollbar bg-[gold]"
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-5 gap-8">
          <h1 className="col-start-1 col-end-2 col-span-2 mt-12 mb-auto font-berkshireswash leading-snug tracking-widest text-stone-800 justify-self-auto rounded-lg shadow-lg shadow-[#111] p-2 items-center mx-auto text-center">
            Management&nbsp;
            <span className="text-emerald-500 text-7xl font-poppins">.</span>
          </h1>
          <div className="col-span-full mx-auto py-10 px-5 w-full max-w-7xl mt-4 bg-slate-300 rounded-lg shadow-lg shadow-[#111]">
            <div className="mx-auto max-w-5xl flex flex-col">
              {/* :TITLE CONTAINER */}
              <div className="mb-8 max-w-lg">
                {/* ::Meet Us */}
                <div className="w-full inline-flex items-center text-sm text-emerald-500 font-semibold uppercase tracking-wide">
                  <span className="flex-shrink-0">Meet</span>
                  <span className="ml-3 w-full h-0.5 bg-emerald-500" />
                </div>
                {/* ::Our dedicated team */}
                <h2 className="text-3xl sm:text-5xl font-bold">
                  Our&nbsp;Management
                  <span className="text-emerald-500"> Committee</span>
                </h2>
                {/* ::Text */}
                <p className="mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  neque nisi eum voluptatem itaque maxime. Ut aperiam aliquid
                  distinctio id iusto, fugit, delectus sequi aliquam eveniet
                  dolor vel, maiores itaque.
                </p>
              </div>
              {/* :TEAM */}
              <div>
                <ul className="grid grid-cols-4 gap-5">
                  {people.map(person => (
                    <li
                      key={person.name}
                      className="col-span-full sm:col-span-2 md:col-span-1 group relative mx-auto max-w-xs overflow-hidden"
                    >
                      {/* ::Picture */}
                      <div className="sm:mb-4 sm:aspect-w-4 sm:aspect-h-5">
                        <img
                          className="absolute w-full h-full bg-slate-200 object-cover shadow-md rounded-lg hover:scale-105 ease-in duration-300 delay-75"
                          src={person.picture}
                          alt="/"
                        />
                      </div>
                      <div className="relative py-16 px-4 sm:p-0 flex flex-col bg-white sm:bg-transparent bg-opacity-40 group-hover:bg-opacity-80">
                        {/* ::Role */}
                        <h3 className="w-full inline-flex items-center text-xs text-emerald-500 uppercase tracking-wide transition-all duration-200 ease-in transform translate-y-20 sm:translate-y-0 group-hover:translate-y-0">
                          <span className="flex-shrink-0">{person.role}</span>
                          <span className="ml-3 w-1/4 h-0.5 bg-emerald-500" />
                        </h3>
                        {/* ::Name */}
                        <h4 className="mb-2 text-3xl sm:text-lg text-black text-opacity-40 sm:text-opacity-100 font-extrabold sm:font-semibold transition-all duration-200 ease-in transform translate-y-20 sm:translate-y-0 group-hover:translate-y-0">
                          {person.name}
                        </h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="About" />

export default About
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  const people = [
    {
      name: "Sh. GOPAL KRISHAN GARG",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh. SANJAY BANSAL",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh. Manoj Bajaj",
      picture: "/static/pics/manojbajaj.jpg",
    },
    {
      name: "Sh. Satish Kumar Aggarwal",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Smt. Meenakshi Arya",
      picture: "/static/pics/avataaars_2_female.png",
    },
    {
      name: "Smt. Pratima Garg",
      picture: "/static/pics/pratimagarg.jpg",
    },
    {
      name: "Smt. Vijay Shree Aruna",
      picture: "/static/pics/avataaars_2_female.png",
    },
    {
      name: "Sh. Yogendra Garg",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh. Sanjay Goyal",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh. TUSHAL SINGHAL",
      picture: "/static/pics/tushalgutpa.jpg",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
      picture: "/static/pics/avataaars_1_male.png",
    },
    {
      name: "Sh.",
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
                  Our current management comprises of 38 people, of all age
                  groups. This ensures that we benefit from the experience of
                  senior members & fresh ideas, enthusiasm of younger, emerging
                  members. We cannot do without the participation of women in
                  the group, who play an extremely important role in guiding
                  other members when it comes various aspects of society & other
                  social events.
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

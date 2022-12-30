import * as React from "react"
import {
  FaAngleLeft,
  FaAngleRight,
  FaBirthdayCake,
  FaCalendarDay,
} from "react-icons/fa"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Birthdays = () => {
  return (
    <Layout>
      <div
        id="birthdays"
        className="max-w-full mx-auto h-full md:h-screen px-4 text-center py-16 bg-[gold] overflow-auto no-scrollbar"
      >
        <h1 className="font-berkshireswash mt-12 mb-auto mx-auto max-w-[380px] leading-relaxed tracking-widest uppercase text-stone-900 rounded-lg shadow-lg shadow-[#111]">
          BIRTHDAYS&nbsp;
          <span className="text-emerald-500 text-7xl font-poppins">.</span>
        </h1>
        <br />
        <div className="flex flex-col max-w-7xl h-auto mx-auto justify-around px-4 py-6 my-5 text-center bg-blue-100 rounded-lg border-b-[2px] border-[dimgray] animate-bounce shadow-inner">
          <p className="font-bold font-architectsdaughter tracking-widest leading-6 text-xl text-stone-800 hover:text-blue-700">
            Sh./Smt. XYZ was born today! Aggarwal Sabha - Rohini wishes them a
            very Happy Birthday!
          </p>
        </div>
        <aside className="flex flex-col max-w-3xl h-auto mx-auto items-center justify-around p-4 my-4 bg-slate-200 rounded-lg border-stone-700 border-b-[2px]">
          <form className="w-full">
            <div className="flex flex-col my-2">
              <label className="w-fit h-auto" htmlFor="name">
                <p className="bg-slate-200 rounded-lg shadow-lg font-medium tracking-widest leading-6 shadow-[#111] hover:scale-105 ease-in-out duration-300 p-2 m-2 text-center">
                  <FaAngleLeft
                    size={25}
                    color="deeppink"
                    className="inline-flex flex-auto justify-self-start"
                  />
                  <span className="px-2">B&apos;DAY&nbsp;CALENDAR!</span>
                  <FaAngleRight
                    size={25}
                    color="deeppink"
                    className="inline-flex flex-auto justify-self-end"
                  />
                </p>
              </label>
              <select className="border rounded-xl p-2 my-2">
                <option className="font-raleway">NAME</option>
                <option className="font-raleway">POST</option>
              </select>
            </div>
            <div className="flex flex-col my-4">
              <label
                className="text-blue-600 text-justify p-1 font-sourceserifpro font-bold items-baseline"
                htmlFor="name"
              >
                <span className="px-2">DATE</span>
                <FaCalendarDay
                  size={20}
                  color="darkblue"
                  className="inline-flex flex-auto justify-self-end"
                />
              </label>
              <input type="date" className="border rounded-xl p-2" />
            </div>
            <div className="flex flex-col my-2">
              <label
                className="text-blue-600 text-justify p-1 font-sourceserifpro font-bold items-baseline"
                htmlFor="name"
              >
                UPCOMING&nbsp;
                <span className="text-emerald-500 text-3xl font-berkshireswash">
                  ...&nbsp;
                </span>
                <FaBirthdayCake
                  size={20}
                  color="darkblue"
                  className="inline-flex flex-auto justify-self-end"
                />
              </label>
              <input type="date" className="border rounded-xl p-2" />
            </div>
          </form>
        </aside>
        <div className="flex max-w-5xl mx-auto h-auto py-4 my-2 items-center justify-center px-4 rounded-3xl bg-transparent">
          <div className="max-w-fit overflow-hidden rounded-lg p-3 m-2 bg-blue-100 shadow-[#111] shadow-lg duration-200 hover:scale-105 hover:shadow-xl">
            <img
              src="https://source.unsplash.com/random/500x500"
              alt="Sh./Smt. XYZ"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-full shadow-lg shadow-[#111]"
            />
            <div className="p-5">
              <p className="text-lg mb-5 font-specialelite font-bold leading-snug tracking-widest text-stone-900">
                Sh./Smt.&nbsp;XYZ,&nbsp;POST
                <br />
                AGGARWAL&nbsp;SABHA&nbsp;-&nbsp;ROHINI.
              </p>
              <h3 className="w-full rounded-3xl bg-stone-900 font-sourceserifpro font-semibold tracking-widest leading-6 py-2 text-[gold] hover:bg-[darkslateblue] hover:text-white hover:shadow-md duration-75">
                Happy&nbsp;Birthday!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Birthdays" />

export default Birthdays

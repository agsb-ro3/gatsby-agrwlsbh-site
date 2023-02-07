import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Work = () => {
  return (
    <Layout>
      <div className="max-w-full mx-auto h-full md:h-screen px-4 text-center py-16 bg-[gold] overflow-auto no-scrollbar">
        <h1 className="max-w-[380px] font-berkshireswash leading-relaxed tracking-widest mt-12 mb-6 mx-auto uppercase text-stone-900 rounded-lg shadow-lg shadow-[#111]">
          WORK&nbsp;
          <span className="text-emerald-500 text-7xl font-poppins">.</span>
        </h1>
        <div className="relative">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-stone-800 bg-green-400 rounded-t-2xl">
            <h3 className="text-justify w-fit h-auto p-4 mt-2 mb-6 underline text-stone-700 decoration-slate-100 decoration-wavy bg-slate-200 shadow-lg rounded-lg font-semibold font-montserrat tracking-widest leading-6 shadow-[#111] hover:scale-105 ease-in-out duration-300 delay-75">
              WHAT&nbsp;WE&nbsp;DO&nbsp;
              <span className="text-[coral] text-4xl font-berkshireswash">
                .
              </span>
            </h3>
            <p className="bg-slate-200 p-4 m-4 rounded-2xl text-justify border-4 border-[dimgray] leading-6 tracking-wide">
              We are a group of esteemed people residing in Rohini,
              predominantly in societies of sector 9, 13, and 14, who are
              committed to contributing to society. This Sabha works for society
              and people in and around it.
            </p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-800">
            <h3 className="text-justify w-fit h-auto p-4 mt-2 mb-6 underline text-stone-700 decoration-slate-100 decoration-wavy bg-slate-200 shadow-lg rounded-lg font-semibold font-montserrat tracking-widest leading-6 shadow-[#111] hover:scale-105 ease-in-out duration-300 delay-75">
              OUR&nbsp;PAST&nbsp;WORK&nbsp;
              <span className="text-[coral] text-4xl font-berkshireswash">
                .
              </span>
            </h3>
            <p className="bg-slate-200 p-4 m-4 rounded-2xl text-justify border-4 border-stone-500 leading-6 tracking-wide">
              <ol>
                The noted works of Aggarwal Sabha - Rohini are:
                <li>A homeopathic clinic which is charitable.</li>
                <li>
                  Adoption of a park from the government so that it can be taken
                  care of and plantation of various plants and flowers.
                </li>
                <li>A marriage center which is also charitable.</li>
              </ol>
            </p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600">
            <h3 className="text-justify w-fit h-auto p-4 mt-2 mb-6 underline text-stone-700 decoration-slate-100 decoration-wavy bg-slate-200 shadow-lg rounded-lg font-semibold font-montserrat tracking-widest leading-6 shadow-[#111] hover:scale-105 ease-in-out duration-300 delay-75">
              OUR&nbsp;MISSION&nbsp;
              <span className="text-[coral] text-4xl font-berkshireswash">
                .
              </span>
            </h3>
            <p className="bg-slate-200 p-4 m-4 rounded-2xl text-justify border-4 border-slate-500 leading-6 tracking-wide">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              debitis natus vitae dolorum, expedita dolore commodi, quo cum
              eaque perferendis, repudiandae neque nobis. Fugit incidunt
              architecto tempora nihil corrupti accusamus?
            </p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800">
            <h3 className="text-justify w-fit h-auto p-4 mt-2 mb-6 underline text-stone-700 decoration-slate-100 decoration-wavy bg-slate-200 shadow-lg rounded-lg font-semibold font-montserrat tracking-widest leading-6 shadow-slate-500 hover:scale-105 ease-in-out duration-300">
              OUR&nbsp;INITIATIVES&nbsp;
              <span className="text-[coral] text-4xl font-berkshireswash">
                .
              </span>
            </h3>
            <p className="bg-slate-200 p-4 m-4 rounded-2xl text-justify border-4 border-[#ff7745] leading-6 tracking-wide">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              debitis natus vitae dolorum, expedita dolore commodi, quo cum
              eaque perferendis, repudiandae neque nobis. Fugit incidunt
              architecto tempora nihil corrupti accusamus?
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Work" />

export default Work

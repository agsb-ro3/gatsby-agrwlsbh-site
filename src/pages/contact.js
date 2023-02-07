import * as React from "react"
import Airform from "react-airform"
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa"
import { HiPhone } from "react-icons/hi"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <div className="bg-[gold] w-full m-0 p-0 min-h-screen">
        <div className="flex flex-col flex-nowrap justify-center items-center mt-16 mb-auto gap-4 space-x-auto space-y-2 p-4">
          <h1 className="text-center mt-16 mb-auto">
            Get in Touch&nbsp;<span className="text-4xl">.</span>
          </h1>
          <div className="bg-blue-100 p-3 m-1 gap-4 space-x-auto space-y-4 rounded-xl shadow-md shadow-[#111]">
            <h3 className="text-center font-specialelite drop-shadow-2xl capitalize">
              Aggarwal&nbsp;Sabha&nbsp;-&nbsp;Rohini
            </h3>
            <hr className="border-blue-300" />
            <p className="text-center tracking-wide leading-5 font-poppins">
              Reach&nbsp;out&nbsp;to&nbsp;us&nbsp;if&nbsp;you&nbsp;have
              any&nbsp;queries&nbsp;about&nbsp;membership
            </p>
            <hr className="border-blue-300" />
            <p className="text-center tracking-wide font-medium leading-5 font-poppins">
              Rohini Sector-9,13,14&nbsp;&middot;&nbsp;Delhi-85
            </p>
          </div>
        </div>
        <div className="max-w-full mx-auto flex mt-2 mb-auto p-2 flex-col lg:flex-row sm:flex-col flex-nowrap justify-center items-center border border-[dimgray] rounded-lg shadow-lg shadow-[#111]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55972.70555787487!2d77.0577435672853!3d28.74063493794535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a47a1803d%3A0xedfb8cc477815e2f!2sRohini%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1675748777405!5m2!1sen!2sin"
            title="map"
            width="400px"
            height="300px"
            className="object-cover w-[320px] lg:w-full xl:w-full sm:w-[648px] md:w-[768px] border border-[dimgray] rounded-full lg:rounded-lg sm:rounded-full md:rounded-3xl relative grayscale-0 contrast-[1.2] opacity-[16] brightness-[.55]"
            loading="eager"
          />
        </div>
        <div
          id="contact-us"
          className="flex flex-row flex-nowrap justify-center items-end mt-8 mb-auto gap-4 space-x-auto space-y-2 p-4"
        >
          <div className="p-4">
            <Airform
              email="contact@aggarwalsabharohini.com"
              className="gap-4 space-x-auto space-y-3 border border-[#111] p-4 bg-blue-200 mx-auto rounded-xl shadow-lg shadow-[#111]"
            >
              <input
                className="w-full rounded-2xl shadow-sm font-montserrat font-semibold uppercase tracking-wide selection:bg-lime-300 shadow-[#111] bg-blue-100"
                type="text"
                placeholder="NAME"
                required
              />
              <input
                className="w-full rounded-2xl shadow-sm font-montserrat font-semibold tracking-wide shadow-[#111] bg-blue-100"
                type="email"
                placeholder="EMAIL"
                required
              />
              <input
                className="w-full rounded-2xl shadow-sm font-montserrat font-semibold tracking-wide shadow-[#111] bg-blue-100"
                type="number"
                maxLength={10}
                placeholder="PHONE NO."
              />
              <textarea
                className="w-full rounded-lg shadow-sm font-montserrat font-semibold tracking-wide shadow-[#111] bg-slate-200"
                placeholder="YOUR MESSAGE"
                rows="5"
              ></textarea>
              <button
                className="inline-flex text-center relative bg-blue-100 font-semibold focus-within:outline-none items-center rounded-xl border-2 border-[#111] hover:bg-[#111] hover:text-white ease-in duration-300 delay-75 hover:border-none shadow-[#111] shadow-md"
                tabIndex={0}
                type="submit"
              >
                SUBMIT
              </button>
            </Airform>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row sm:flex-col flex-nowrap justify-center items-center gap-4 space-x-2 space-y-auto">
          <div className="flex flex-row flex-nowrap p-4 m-2 bg-[#111] rounded-xl shadow-md shadow-[#111]">
            <h2 className="font-medium font-specialelite text-center drop-shadow-2xl text-white hover:text-[cyan] ease-in duration-300 delay-75">
              Connect with us!
            </h2>
          </div>
          <div className="flex p-4 mx-auto justify-between items-center">
            <ul className="inline-flex gap-1 space-x-1 space-y-1 flex-wrap p-1 m-1">
              <li className="bg-white text-purple-700 shadow-lg shadow-[#111] rounded-full hover:text-slate-700 ease-in duration-300 delay-100">
                <a
                  href="https://facebook.com/"
                  title="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="icon" size={35} />
                </a>
              </li>
              <li className="bg-white text-purple-700 shadow-lg shadow-[#111] rounded-full hover:text-slate-700 ease-in duration-300 delay-100">
                <a
                  href="https://instagram.com/"
                  title="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="icon" size={35} />
                </a>
              </li>
              <li className="bg-white text-purple-700 shadow-lg shadow-[#111] rounded-full hover:text-slate-700 ease-in duration-300 delay-100">
                <a
                  href="https://wa.me/"
                  title="Whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="icon" size={35} />
                </a>
              </li>
              <li className="bg-white text-purple-700 shadow-lg shadow-[#111] rounded-full hover:text-slate-700 ease-in duration-300 delay-100">
                <a
                  href="https://twitter.com/"
                  title="Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="icon" size={35} />
                </a>
              </li>
              <li className="bg-white text-purple-700 shadow-lg shadow-[#111] rounded-full hover:text-slate-700 ease-in duration-300 delay-100">
                <a
                  href="tel:+911234567890"
                  title="Phone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HiPhone className="icon" size={35} />
                </a>
              </li>
              <li className="bg-white text-purple-700 shadow-lg shadow-[#111] rounded-full hover:text-slate-700 ease-in duration-300 delay-100">
                <a
                  href="mailto:somewhere@example.com"
                  title="Mail"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelope className="icon" size={35} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default Contact

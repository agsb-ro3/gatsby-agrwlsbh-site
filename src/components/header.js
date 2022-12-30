import { Link } from "gatsby"
import * as React from "react"
import { useEffect, useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import { HiMenuAlt3 } from "react-icons/hi"

const Header = ({ siteTitle }) => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener("scroll", handleShadow)
  }, [])

  return (
    <header>
      <div
        className={
          shadow
            ? "w-full h-28 top-0 left-0 right-0 fixed z-[100] bg-blue-200 p-2 backdrop-blur-3xl"
            : "w-full h-28 top-0 left-0 right-0 fixed z-[100] bg-blue-200 p-2"
        }
      >
        <div className="flex flex-row flex-nowrap justify-between items-center gap-4 space-x-2 space-y-auto">
          <div className="inline-flex">
            <h1 className="text-slate-800 drop-shadow-2xl">
              <Link to="/">{siteTitle}</Link>&nbsp;-&nbsp;
              <span className="text-[navy]">Rohini</span>&nbsp;
              <span className="text-6xl text-emerald-500">.</span>
            </h1>
          </div>
          <ul className="hidden md:inline-flex gap-4">
            <li className="cursor-pointer text-slate-800 uppercase hover:underline underline-offset-4 decoration-2 decoration-purple-700 shadow-md shadow-[#111] rounded-2xl ease-in duration-300 delay-100">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer text-slate-800 uppercase hover:underline underline-offset-4 decoration-2 decoration-purple-700 shadow-md shadow-[#111] rounded-2xl ease-in duration-300 delay-100">
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer text-slate-800 uppercase hover:underline underline-offset-4 decoration-2 decoration-purple-700 shadow-md shadow-[#111] rounded-2xl ease-in duration-300 delay-100">
              <Link to="/management">MANAGEMENT</Link>
            </li>
            <li className="cursor-pointer text-slate-800 uppercase hover:underline underline-offset-4 decoration-2 decoration-purple-700 shadow-md shadow-[#111] rounded-2xl ease-in duration-300 delay-100">
              <Link to="/members">MEMBERS</Link>
            </li>
            <li className="cursor-pointer text-slate-800 uppercase hover:underline underline-offset-4 decoration-2 decoration-purple-700 shadow-md shadow-[#111] rounded-2xl ease-in duration-300 delay-100">
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li className="cursor-pointer text-slate-800 uppercase hover:underline underline-offset-4 decoration-2 decoration-purple-700 shadow-md shadow-[#111] rounded-2xl ease-in duration-300 delay-100">
              <Link to="/birthdays">BIRTHDAYS</Link>
            </li>
            <li className="cursor-pointer text-slate-800 uppercase hover:underline underline-offset-4 decoration-2 decoration-purple-700 shadow-md shadow-[#111] rounded-2xl ease-in duration-300 delay-100">
              <Link to="/work">WORK</Link>
            </li>
            <li className="cursor-pointer text-slate-800 uppercase hover:underline underline-offset-4 decoration-2 decoration-purple-700 shadow-md shadow-[#111] rounded-2xl ease-in duration-300 delay-100">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <button
            tabIndex={0}
            onClick={handleNav}
            className="md:hidden z-10 inline-flex text-[beige] bg-[navy] hover:bg-[#111] hover:border-[#FC139B] hover:drop-shadow-2xl hover:text-white ease-in duration-300 delay-100 rounded-full p-2 focus-within:outline-none"
          >
            <HiMenuAlt3 className="icon" size={25} />
          </button>
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[beige] backdrop-blur-3xl p-10 ease-in duration-500 overflow-auto"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <div
                  tabIndex={0}
                  role="button"
                  onClick={handleNav}
                  className="text-[beige] bg-[navy] hover:bg-[#111] hover:border-[#FC139B] hover:drop-shadow-2xl hover:text-white ease-in duration-300 delay-100 rounded-full p-2 focus-within:outline-none"
                >
                  <FaAngleDown size={25} className="icon" />
                </div>
              </div>
            </div>
            <div className="py-4 flex-col gap-4 space-x-auto space-y-2">
              <ul className="cursor-pointer">
                <h1 className="text-slate-700 hover:text-slate-900 ease-in duration-300 delay-75 drop-shadow-2xl">
                  Aggarwal Sabha.
                </h1>
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer text-slate-800 text-lg uppercase hover:text-purple-700 hover:scale-x-105 ease-in duration-300 delay-100"
                >
                  <Link to="/" title="home">
                    HOME
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer text-slate-800 text-lg uppercase hover:text-purple-700 hover:scale-x-105 ease-in duration-300 delay-100"
                >
                  <Link to="/about" title="about us">
                    ABOUT
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer text-slate-800 text-lg uppercase hover:text-purple-700 hover:scale-x-105 ease-in duration-300 delay-100"
                >
                  <Link to="/management" title="our management">
                    MANAGEMENT
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer text-slate-800 text-lg uppercase hover:text-purple-700 hover:scale-x-105 ease-in duration-300 delay-100"
                >
                  <Link to="/members" title="our members">
                    MEMBERS
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer text-slate-800 text-lg uppercase hover:text-purple-700 hover:scale-x-105 ease-in duration-300 delay-100"
                >
                  <Link to="/gallery" title="gallery">
                    GALLERY
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer text-slate-800 text-lg uppercase hover:text-purple-700 hover:scale-x-105 ease-in duration-300 delay-100"
                >
                  <Link to="/birthdays" title="birthdays">
                    BIRTHDAYS
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer text-slate-800 text-lg uppercase hover:text-purple-700 hover:scale-x-105 ease-in duration-300 delay-100"
                >
                  <Link to="/work" title="our work">
                    WORK
                  </Link>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer text-slate-800 text-lg uppercase hover:text-purple-700 hover:scale-x-105 ease-in duration-300 delay-100"
                >
                  <Link to="/contact" title="contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

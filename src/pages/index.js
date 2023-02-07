import { Link } from "gatsby"
import * as React from "react"
import { useEffect, useState } from "react"
import { HiOutlineChevronDoubleRight } from "react-icons/hi"
import { useTypewriter } from "react-simple-typewriter"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Users } from "../components/users"
import "../styles/global.css"

const IndexPage = () => {
  const [upcomingBirthdays, setUpcomingBirthdays] = useState(0)
  const [todaysBirthdays, setTodaysBirthdays] = useState(0)

  useEffect(() => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentDate = today.getDate()

    let upcoming = 0
    let todayB = 0

    Users.forEach(user => {
      const dob = new Date(user.dob)
      const birthMonth = dob.getMonth()
      const birthDate = dob.getDate()

      if (birthMonth === currentMonth && birthDate > currentDate) {
        upcoming += 1
      }
      if (birthMonth === currentMonth && birthDate === currentDate) {
        todayB += 1
      }
    })

    setUpcomingBirthdays(upcoming)
    setTodaysBirthdays(todayB)
  }, [])
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
              <p className="text-xl font-bold leading-8 font-montserrat tracking-widest text-[dimgray]">
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
              <Link to="/work" title="our work">
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
        <section className="flex flex-col lg:flex-row sm:flex-col items-center justify-between w-full h-56 gap-4 p-4">
          <div className="p-8 mx-auto max-w-[480px] min-w-[300px] text-center lg:text-start sm:text-center rounded-3xl bg-blue-200 shadow-lg shadow-[#111] cursor-pointer hover:scale-110 hover:rounded-none ease-in duration-300 delay-75">
            <Link to="/birthdays">
              <h3 className="text-[#063b9e] tracking-wide leading-6 font-specialelite hover:text-black ease-in duration-300 delay-75 uppercase">
                Upcoming Birthdays: {upcomingBirthdays}
              </h3>
            </Link>
          </div>
          <div className="p-8 mx-auto max-w-[480px] min-w-[300px] text-center lg:text-end sm:text-center rounded-3xl bg-blue-200 shadow-lg shadow-[#111] cursor-pointer hover:scale-110 hover:rounded-none ease-in duration-300 delay-75">
            <Link to="/birthdays">
              <h3 className="text-[deeppink] tracking-wide leading-6 font-specialelite hover:text-black ease-in duration-300 delay-75 uppercase">
                Today&apos;s Birthdays: {todaysBirthdays}
              </h3>
            </Link>
          </div>
        </section>
        <br />
        <span></span>
        <span></span>
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

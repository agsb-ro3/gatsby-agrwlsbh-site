import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Users } from "../components/users"

const User = ({ name, image, dob }) => (
  <div className="p-2">
    <img
      src={image}
      alt={name}
      width={500}
      height={500}
      className="px-auto py-2 w-full h-auto rounded-lg object-cover shadow-lg shadow-black"
    />
    <p className="px-auto py-2 text-center text-[#000080] font-sourceserifpro text-sm lg:text-lg sm:text-sm uppercase">
      <span className="text-black font-specialelite font-normal">NAME:</span>{" "}
      {name}
    </p>
    <hr className="border-[dimgray]" />
    <p className="px-auto py-2 text-center text-[crimson] font-sourceserifpro text-sm lg:text-lg sm:text-sm">
      <span className="text-black font-normal font-specialelite">DOB:</span>{" "}
      {dob}
    </p>
    <hr className="border-[dimgray] border-dashed" />
  </div>
)

const Birthdays = () => {
  const [selectedDay, setSelectedDay] = React.useState("01")

  const filteredUsers = Users.filter(
    user =>
      new Date(user.dob).getDate().toString().padStart(2, "0") === selectedDay
  )
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
        <div className="flex flex-col max-w-3xl h-auto mx-auto justify-around px-4 py-6 my-5 text-center bg-blue-100 rounded-lg border-b-[2px] border-[dimgray] animate-bounce shadow-inner">
          <p className="font-bold font-architectsdaughter tracking-widest leading-6 text-xl text-stone-800 hover:text-blue-700">
            Aggarwal Sabha - Rohini wishes you a very Happy Birthday!
          </p>
        </div>
        <div className="flex max-w-5xl mx-auto h-auto py-4 my-2 items-center justify-center px-4 rounded-3xl bg-transparent">
          <div className="max-w-fit overflow-hidden rounded-lg p-3 m-2 bg-blue-100 shadow-[#111] shadow-lg duration-200 hover:shadow-xl">
            <div>
              <label
                htmlFor="name"
                className="inline-block pr-2 pl-auto text-[#111] text-justify text-lg lg:text-base sm:text-lg font-specialelite"
              >
                MONTH
              </label>
              <select
                value={selectedDay}
                onChange={e => setSelectedDay(e.target.value)}
                className="rounded-lg text-black bg-slate-100"
              >
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              {filteredUsers.map(user => (
                <User
                  key={user.id}
                  name={user.name}
                  image={user.image}
                  dob={user.dob}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Birthdays" />

export default Birthdays

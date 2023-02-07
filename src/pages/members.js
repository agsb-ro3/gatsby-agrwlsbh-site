import * as React from "react"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Users } from "../components/users"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Members = () => {
  const [search, setSearch] = useState("")

  return (
    <Layout>
      <div
        id="members"
        className="w-full h-full md:h-screen px-2 items-center py-16 overflow-y-auto overflow-x-hidden no-scrollbar bg-[gold]"
      >
        <card className="flex flex-col max-w-6xl mx-auto space-y-4">
          <h1 className="font-berkshireswash mt-12 mb-auto uppercase text-stone-800 rounded-lg shadow-lg shadow-[#111] text-center m-auto px-4 py-4">
            Members&nbsp;
            <span className="text-emerald-500 text-7xl font-poppins">.</span>
          </h1>
          <p className="mt-4 text-base font-montserrat">
            We have approximately 650 members in our ecosystem currently, and we
            are growing every year with each event in the Sabha. Below is the
            list of members along with their professions so that we can
            collaborate by business vertical:
          </p>
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="my-2 flex sm:flex-row flex-col">
                <div className="block relative rounded-2xl shadow-xl shadow-[dimgray]">
                  <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <FaSearch color="darkslateblue" size={18} />
                  </span>
                  <input
                    placeholder="Search..."
                    onChange={e => setSearch(e.target.value)}
                    className="appearance-none rounded-2xl border font-montserrat font-medium border-gray-300 border-b block pl-8 pr-6 py-2 w-full bg-slate-200 text-sm placeholder-stone-400 text-slate-700 focus:bg-amber-100 focus:placeholder-stone-600 selection:bg-lime-300 focus:text-[#111] focus:outline-none"
                  />
                </div>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full h-[700px] shadow overflow-auto no-scrollbar rounded-2xl">
                  <table className="min-w-full leading-normal font-montserrat">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-slate-300 text-left text-xs font-bold text-stone-700 uppercase tracking-wider">
                          Member
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-slate-300 text-left text-xs font-bold text-stone-700 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-slate-300 text-left text-xs font-bold text-stone-700 uppercase tracking-wider">
                          DOB
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-slate-300 text-left text-xs font-bold text-stone-700 uppercase tracking-wider">
                          Profession
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Users.filter(item => {
                        return search.toLowerCase() === ""
                          ? item
                          : item.name.toLowerCase().includes(search)
                      }).map(user => (
                        <tr key={user.id}>
                          <td className="px-5 py-5 border-b border-slate-200 bg-[beige] text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  src={user.image}
                                  alt="/"
                                  width={301}
                                  height={301}
                                  className="w-full h-full rounded-full"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-slate-200 bg-[beige] text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.name}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-slate-200 bg-[beige] text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.dob}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-slate-200 bg-[beige] text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              />
                              <span className="relative">
                                {user.profession}
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Members" />

export default Members

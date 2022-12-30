import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Gallery = () => {
  return (
    <Layout>
      <div
        id="gallery"
        className="max-w-full mx-auto h-full md:h-screen px-4 text-center py-16 bg-[gold] overflow-auto no-scrollbar"
      >
        <h1 className="max-w-[380px] font-berkshireswash leading-relaxed tracking-widest mt-12 mb-auto mx-auto uppercase text-stone-900 rounded-lg shadow-lg shadow-[#111]">
          GALLERY&nbsp;
          <span className="text-emerald-500 text-7xl font-berkshireswash">
            .
          </span>
        </h1>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 pt-20 pb-auto">
          <div className="rounded-2xl p-2 bg-blue-200 w-fit h-fit m-2 shadow-lg shadow-[#111]">
            <img
              src="/static/pics/festivals.avif"
              alt="/"
              className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-2xl hover:scale-105 ease-in duration-300"
            />
            <p className="p-2 m-1 text-center text-sm sm:text-xl md:text-2xl font-sourceserifpro font-bold leading-snug tracking-widest text-stone-800 hover:text-sky-700">
              <Link href="/galleryitems/#festivals" className="cursor-pointer">
                Festivals&nbsp;
              </Link>
              <span className="text-emerald-500 text-4xl font-berkshireswash">
                .
              </span>
            </p>
          </div>
          <div className="rounded-2xl p-2 bg-blue-200 w-fit h-fit m-2 shadow-lg shadow-[#111]">
            <img
              src="/static/pics/charity.avif"
              alt="/"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 ease-in duration-300"
            />
            <p className="p-2 m-1 text-center text-sm sm:text-xl md:text-2xl font-sourceserifpro font-bold leading-snug tracking-widest text-stone-800 hover:text-sky-700">
              <Link href="/galleryitems/#charity" className="cursor-pointer">
                Charity&nbsp;
              </Link>
              <span className="text-emerald-500 text-4xl font-berkshireswash">
                .
              </span>
            </p>
          </div>
          <div className="rounded-2xl p-2 bg-blue-200 w-fit h-fit m-2 shadow-lg shadow-[#111]">
            <img
              src="/static/pics/cricket.avif"
              alt="/"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 ease-in duration-300"
            />
            <p className="p-2 m-1 text-center text-sm sm:text-xl md:text-2xl font-sourceserifpro font-bold leading-snug tracking-widest text-stone-800 hover:text-sky-700">
              <Link href="/galleryitems/#cricket" className="cursor-pointer">
                Cricket&nbsp;
              </Link>
              <span className="text-emerald-500 text-4xl font-berkshireswash">
                .
              </span>
            </p>
          </div>
          <div className="rounded-2xl p-2 bg-blue-200 w-fit h-fit m-2 shadow-lg shadow-[#111]">
            <img
              src="/static/pics/wedding.avif"
              alt="/"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 ease-in duration-300"
            />

            <p className="p-2 m-1 text-center text-sm sm:text-xl md:text-2xl font-sourceserifpro font-bold leading-snug tracking-widest text-stone-800 hover:text-sky-700">
              <Link href="/galleryitems/#weddings" className="cursor-pointer">
                Weddings&nbsp;
              </Link>

              <span className="text-emerald-500 text-4xl font-berkshireswash">
                .
              </span>
            </p>
          </div>
          <div className="rounded-2xl p-2 bg-blue-200 w-fit h-fit m-2 shadow-lg shadow-[#111]">
            <img
              src="/static/pics/ceremony.avif"
              alt="/"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 ease-in duration-300"
            />
            <p className="p-2 m-1 text-center text-sm sm:text-xl md:text-2xl font-sourceserifpro font-bold leading-snug tracking-widest text-stone-800 hover:text-sky-700">
              <Link href="/galleryitems/#ceremonies" className="cursor-pointer">
                Ceremonies&nbsp;
              </Link>

              <span className="text-emerald-500 text-4xl font-berkshireswash">
                .
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around rounded-2xl mx-auto p-2 bg-blue-200 shadow-lg shadow-[#111] w-fit h-fit mt-6 mb-4">
          <p className="p-2 m-1 text-center text-sm sm:text-xl md:text-2xl font-sourceserifpro font-bold leading-snug tracking-widest text-black hover:text-pink-500 animate-bounce">
            <Link href="/galleryitems/#featured" className="cursor-pointer">
              FEATURED&nbsp;
            </Link>
            <span className="text-emerald-600 text-4xl font-berkshireswash">
              ...
            </span>
          </p>
          <img
            src="/static/pics/celebrations.avif"
            alt="/"
            className="w-full h-full object-cover rounded-2xl hover:scale-105 ease-in duration-300"
          />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Gallery" />

export default Gallery

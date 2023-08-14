import Masonry from "react-masonry-css";
import { AiOutlineDownload } from "react-icons/ai";
import { useState } from "react";
import Image from 'next/image'

const breakPointObj = {
  default: 3,
  1200: 2,
  900: 1,
  600: 1
}

const Photo = () => {
  const [postHovered, setPostHovered] = useState(false);

  return (
    <>

      <Masonry
        className="px-2 md:px-4 pt-1 md:pt-3 flex gap-2"
        columnClassName="bg-clip-padding"
        breakpointCols={breakPointObj}>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain ">
              <Image

                src="/packing_1.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_1'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_2.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_2'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_3.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_3'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_4.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_4'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_5.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_5'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_6.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_6'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_7.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_7'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_8.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_8'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_9.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_9'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_10.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_10'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_11.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_11'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_12.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_12'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_13.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_13'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_14.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_14'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_15.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_15'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="md:mx-1 my-4 md:p-0 z-10 border-2 border-slate-700"
          style={{
            backgroundColor: 'rgba(17, 25, 40, 0.15)',
          }}>
          <div
            onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            className="relative cursor-zoom-in w-auto hover:shadow-lg overflow-hidden transition-all duration-500 ease-in-out"
          >
            <div className="w-full relative overflow-hidden max-h-[80vh] object-contain">
              <Image

                src="/packing_16.webp"
                height={500}
                width={500}
                className="w-full h-full object-cover hover:scale-125 transition duration-1000"
                alt="user-post"
              />
            </div>

          </div>

          <div className="bg-slate-900 flex relative justify-around items-center">
            <h1 className="text-white flex-1 pl-2 text-[1rem] font-semibold ">
              Packing
            </h1>

            <div className="flex items-center btn-group">

              <a
                href='/packing_16'
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="btn bg-slate-900 px-2 hover:animate-pulse "
              >
                <AiOutlineDownload className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Masonry>
    </>
  );
};

export default Photo;
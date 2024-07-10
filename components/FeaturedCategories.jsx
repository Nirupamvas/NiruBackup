"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CategorieData = [
    {
      id: 1,
      catName: "Blouse",
      imgUrl:
        "https://img.freepik.com/premium-photo/painting-indian-woman-generative-ai_849906-20879.jpg",
      status: "",
    },
    {
      id: 2,
      catName: "Kurthi",
      imgUrl:
        "https://images.nightcafe.studio/jobs/7TDT7vxotb342heKrd2J/7TDT7vxotb342heKrd2J--1--21epe.jpg?tr=w-1600,c-at_max",
      status: "",
    },
    {
      id: 3,
      catName: "Salwar",
      imgUrl:
        "https://img.freepik.com/premium-photo/portrait-indian-woman-beautiful-traditional-dress-ai-generated-art_272168-11686.jpg",
      status: "",
    },
    {
      id: 4,
      catName: "Lehanga",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/030/565/093/large_2x/ai-generative-pretty-indian-young-girl-dress-up-saree-free-photo.jpg",
      status: "",
    },
    {
      id: 5,
      catName: "Dress",
      imgUrl:
        "https://i.pinimg.com/736x/ea/16/ec/ea16ec9cff268876a8ea6c50ee0c9426.jpg",
      status: "",
    },
    {
      id: 6,
      catName: "ReadyToWear",
      imgUrl:
        "https://i.pinimg.com/736x/5a/ee/2d/5aee2da792c7f8e224696962007e1733.jpg",
      status: "",
    },
    {
        id: 7,
        catName: "Blouse",
        imgUrl:
          "https://img.freepik.com/premium-photo/painting-indian-woman-generative-ai_849906-20879.jpg",
        status: "",
      },
      {
        id: 8,
        catName: "Kurthi",
        imgUrl:
          "https://images.nightcafe.studio/jobs/7TDT7vxotb342heKrd2J/7TDT7vxotb342heKrd2J--1--21epe.jpg?tr=w-1600,c-at_max",
        status: "",
      },

  ];
const FeaturedCategories = () => {
  const router = useRouter();

  const navigateToPost = (slug) => {
    router.push(`/stitching/${slug}`);
  };

  return (
    <>
      {/* Product List Section: Categories Grid */}
      <div className="bg-white dark:bg-gray-100 dark:text-gray-100">
   
    <div className="fixed-height-container mx-auto px-4 py-16  lg:px-8 lg:py-10 xl:max-w-7xl float-items">
    <div className="text-center mb-8 fixed-height-container">
      <h1 className="text-2xl font-bold text-black">Choose your fashion</h1>
      <p className="text-lg text-black font-light">Your choice, we'll design & stitch, just for you</p>
    </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
          {CategorieData.map((item)=>{
            return(
            <React.Fragment key={item.id}>
            <Link
              href={`/stitching/${item.catName}`}
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src={item.imgUrl}
                alt="Product Image"
                className="transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center top-3/4">
                <div className=" bg-white/95 p-96 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-600 dark:bg-gray-900/90">
                  {item.catName}
                </div>
              </div>
            </Link>
            </React.Fragment>
            )
          })}
            {/* <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://images.nightcafe.studio/jobs/kqRaCYH6yqg0dOEs2kOy/kqRaCYH6yqg0dOEs2kOy--1--43s2c.jpg?tr=w-1600,c-at_max"
                alt="Product Image"
                className="transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center top-3/4">
                <div className=" bg-white/95 px-28 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://images.nightcafe.studio/jobs/7TDT7vxotb342heKrd2J/7TDT7vxotb342heKrd2J--1--21epe.jpg?tr=w-1600,c-at_max"
                alt="Product Image"
                className="transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center top-3/4">
                <div className=" bg-white/95 px-28 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://images.nightcafe.studio/jobs/6YAcMSPXmsNeF1tZg3Oj/6YAcMSPXmsNeF1tZg3Oj--1--17w5o.jpg?tr=w-1600,c-at_max"
                alt="Product Image"
                className="transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center top-3/4">
                <div className=" bg-white/95 px-28 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://images.nightcafe.studio/jobs/6YAcMSPXmsNeF1tZg3Oj/6YAcMSPXmsNeF1tZg3Oj--1--17w5o.jpg?tr=w-1600,c-at_max"
                alt="Product Image"
                className="transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center top-3/4">
                <div className=" bg-white/95 px-28 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://images.nightcafe.studio/jobs/6YAcMSPXmsNeF1tZg3Oj/6YAcMSPXmsNeF1tZg3Oj--1--17w5o.jpg?tr=w-1600,c-at_max"
                alt="Product Image"
                className="transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center top-3/4">
                <div className=" bg-white/95 px-28 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://images.nightcafe.studio/jobs/6YAcMSPXmsNeF1tZg3Oj/6YAcMSPXmsNeF1tZg3Oj--1--17w5o.jpg?tr=w-1600,c-at_max"
                alt="Product Image"
                className="transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center top-3/4">
                <div className=" bg-white/95 px-28 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src="https://images.nightcafe.studio/jobs/6YAcMSPXmsNeF1tZg3Oj/6YAcMSPXmsNeF1tZg3Oj--1--17w5o.jpg?tr=w-1600,c-at_max"
                alt="Product Image"
                className="transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center top-3/4">
                <div className=" bg-white/95 px-28 py-2 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-[#446c13] group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Electronics
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </>
  )
}

export default FeaturedCategories
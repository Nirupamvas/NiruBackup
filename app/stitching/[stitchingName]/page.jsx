"use client";

import FeaturedCategories from '@/components/FeaturedCategories'
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo';
import Testimonials from '@/components/Testimonials';
import { FlipWords } from '@/components/ui/flip-words';
import RelatedCarosal from '@/components/RelatedCarosal';




const Blouse = ({params}) => {

  const wordList = ["better", "Comfortable", "casual", "ethnic tunic","Unique"];
  wordList[0]=params.stitchingName;
  const words = wordList.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return (
    <>
    
      <div className="w-full text-center  md:text-center  bg-[#a3b7a4] ">
        <h1 className="py-12 animate-marquee whitespace-nowrap mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight ">
        Flawless Ethnic Flair {" "}
          
          <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
          <FlipWords words={words} />
            {/* {params.stitchingName} */}
            {/* <Meteors number={50}  /> */}
          </span>
          
          
        </h1>
        
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* <Meteors number={50}  /> */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-[#BAE284] p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
            
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Sleeveless Blouse
                </h2>

                <p className="mt-4 text-gray-500">
                  A sleeveless blouse is a type of blouse that does not have
                  sleeves and typically covers the upper body and arms. It can
                  be worn for various occasions, such as casual outings, or
                  occasions. Get your blouse tailor-made to your size now.
                </p>
              </header>

              {/* <a
                href="#"
                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                Book Consultation
              </a> */}

              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-6">
   <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFCF26_0%,#3929F1_50%,#EB22CB_100%)]" /> {/*bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] */}
  <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  Book Consultation
  </span>
</button>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="group block">
                  <img
                    src="https://img.pikbest.com/origin/09/42/56/93qpIkbEsTCv3.jpg!w700wp"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />

                  {/* <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Simple Watch
                </h3>

                <p className="mt-1 text-sm text-gray-700">$150</p>
              </div> */}
                </a>
              </li>

              <li>
                <a href="#" className="group block">
                  <img
                    src="https://i.pinimg.com/736x/7a/d6/21/7ad621cc88d4efbfa3e9a6736dceba58.jpg"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                  />

                  {/* <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Simple Watch
                </h3>

                <p className="mt-1 text-sm text-gray-700">$150</p>
              </div> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-2 lg:py-8 order-last lg:order-first">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block">
                    <img
                      src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8yNF9hX3Nob3Rfb2Zfd2VkZGluZ19qb3lmdWxfaGFwcGluZXNzX2lubm9jZW50X19iNjdmNTliOS0xZWRkLTQ2YWUtOTViZS1hOGE5Njc2ZGUwNjlfMS5qcGc.jpg"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />
                    {/* <div className="mt-3">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Simple Watch
                </h3>
                <p className="mt-1 text-sm text-gray-700">$150</p>
              </div> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="group block">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/035/687/324/small_2x/ai-generated-a-young-indian-girl-wearing-traditional-attire-photo.jpg"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />
                    {/* <div className="mt-3">
                <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Simple Watch
                </h3>
                <p className="mt-1 text-sm text-gray-700">$150</p>
              </div> */}
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid place-content-center rounded bg-[#FFEDFA] p-6 sm:p-8 order-first lg:order-last">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Princess Cut Blouse
                  </h2>
                  <p className="mt-4 text-gray-500">
                    A princess-cut blouse has a curved line of stitching that
                    runs from the centre of the sleeve to the bottom. Since it
                    has a curvature, the blouse fits much better than any other
                    type of blouse. Get your princess-cut blouse tailor-made to
                    your size now.
                  </p>
                </header>
                {/* <a
                  href="#"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Book Consultation
                </a> */}
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 my-6">
   <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D4E157_0%,#388E3C_50%,#E2CBFF_100%)]" /> {/*bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] */}
  <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  Book Consultation
  </span>
</button>
              </div>
            </div>
          </div>
        </div>
      </section>



<Testimonials/>
<CardHoverEffectDemo/>

<FeaturedCategories/>

<RelatedCarosal />
</>
  );
}

export default Blouse




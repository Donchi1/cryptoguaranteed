import React from 'react'
import Link  from 'next/link'

function Hero({ pageName }: {pageName: string}) {
  return (
    <>
      <section
        className="w-full pt-80 pb-52 bg-fixed bg-cover  bg-no-repeat bg-center bg-special relative"
        style={{
          backgroundImage: `url(/assets/img/bg-3.png)`,
        }}
      ></section>
      <div className="container mx-auto text-center text-white  absolute top-96 xl:right-20">
        <div className="flex justify-center items-center text-center ">
          <div>
            <div className="mb-10">
              <h2 className="font-bold uppercase text-5xl ">
                {pageName === 'About-Us' ? pageName.slice(0, 6) : pageName}
                <span className="text-[#5d41ec]">
                  {pageName === 'About-Us' && pageName.slice(6, 9)}
                </span>
              </h2>
            </div>
            <div>
              <Link href="/">Home</Link>
              <span className="mx-4">/</span> <span>{pageName}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

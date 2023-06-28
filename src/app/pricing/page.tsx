import React from 'react'
import Hero from '@/components/Hero'
import Plans from '@/components/Plans'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export default function Pricing() {
  return (
    <>
    <NavBar />
      <section className="footer-bg homepage-3">
        <Hero pageName="Pricing" />
        <section className="container mx-auto">
          <div className="col-md-12">
            <div className=" sm:space-y-4">
              <div className="text-center text-4xl my-12 ">
                <h2>Basic Plans</h2>
              </div>
              <div className="flex flex-wrap  items-center">
                <Plans
                  initiald={'$100'}
                  initialw={'$2500'}
                  head={'Round-1'}
                  bonus={'$10'}
                />
                <Plans
                  initiald={'$200'}
                  initialw={'$3500'}
                  head={'Round-2'}
                  bonus={'$15'}
                />
                <Plans
                  initiald={'$300'}
                  initialw={'$4999'}
                  head={'Round-3'}
                  bonus={'$20'}
                />
                <Plans
                  initiald={'$400'}
                  initialw={'$5750'}
                  head={'Round-4'}
                  bonus={'$25'}
                />
              </div>
            </div>
            <div className="sm:space-y-4 mb-8">
              <div className="text-center text-4xl my-12 ">
                <h2>Advanced Plans</h2>
              </div>
              <div className="flex flex-wrap justify- items-center">
                <Plans
                  bonus={'$30'}
                  initiald={'$500'}
                  initialw={'$7500'}
                  head={'Round-5'}
                />

                <Plans
                  bonus={'$40'}
                  initiald={'$600'}
                  initialw={'$9500'}
                  head={'Round-6'}
                />

                <Plans
                  bonus={'$80'}
                  initiald={'$1000'}
                  initialw={'$19500'}
                  head={'Round-7'}
                />
                <Plans
                  bonus={'100'}
                  initiald={'$1500'}
                  initialw={'$25,000'}
                  head={'Round-8'}
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  )
}

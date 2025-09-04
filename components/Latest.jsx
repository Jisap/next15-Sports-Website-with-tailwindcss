import Link from 'next/link'
import React from 'react'

const Latest = () => {
  return (
    <section className='mt-24'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-end mb-[72px]'>
          <h4 className="h4 w-max border-b-2">
            Explore Our Lates Collection
          </h4>
          <Link href="/" className="linl-primary text-accent2 hover:text-primary">
            View All
          </Link>
        </div>
        {/* Slider */}
      </div>
    </section>
  )
}

export default Latest
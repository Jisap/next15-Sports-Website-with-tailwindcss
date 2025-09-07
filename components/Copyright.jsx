import React from 'react'

const Copyright = () => {
  return (
    <section className='bg-primary mt-24 py-12 text-white'>
      <div className='container mx-auto'>
        <ul className='flex flex-col xl:flex-row items-center justify-center gap-6'>
          <li>
            <a href="#" className='border-b'>Terms of use</a>
          </li>
          <li>
            <a href="#" className='border-b'>Cookings Setting</a>
          </li>
          <li>
            <a href="#" className='border-b'>Privacy Policy</a>
          </li>
        </ul>

        <p>
          &copy; 2025 Venoma. All rights reserved.
        </p>
      </div>
    </section>
  )
}

export default Copyright
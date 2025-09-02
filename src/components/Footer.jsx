import React from 'react'

const Footer = () => {

    const date = new Date();

  return (
    <div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        Copyright {date.getFullYear()} © QR-Generator Suraj-Airani - All Rights Reseved.</p>
    </div>
  )
}

export default Footer
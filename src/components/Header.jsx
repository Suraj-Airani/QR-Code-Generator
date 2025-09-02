import React from 'react'
import { assets } from '../assets/assets.js'

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <img
            src={assets.logo}
            alt="logo"
            className="w-8 h-8 rounded"
          />
          QR Code Generator
        </h1>
        <div className="flex gap-4 text-white-600">
          <button className="hover:text-blue-500 cursor-pointer">Download</button>
          <button className="hover:text-blue-500 cursor-pointer">Share</button>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const LogoImg = () => {
  return (
    <section className='mt-20'>
    <div className="max-w-4xl mx-auto p-6 text-center mt-15">
        <Link to="/" className="text-blue-500 underline hover:text-blue-700 hover:font-bold">← Go Back</Link>
      </div>
    <div className='m-auto px-2'>
      <img className='bg-gray-200 m-auto object-cover  rounded' src="/image/logo.jpg"  alt="Adatala Dakhil Madrasha Logo" />
    </div>
    </section>
  )
}

export default LogoImg

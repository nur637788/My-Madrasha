import React from 'react'
import { Link } from 'react-router-dom'

const LogoImg = () => {
  return (
    <section className=' min-h-screen flex flex-col items-center justify-center'>
      <p><Link to='/' className='mx-2 bg-red-500 px-2 py-1 rounded hover:bg-red-600 '>← Back</Link>
        <div className='m-auto px-2 mt-5'>
          <img className='bg-gray-200 m-auto object-cover  rounded' src="/image/logo.jpg" alt="Adatala Dakhil Madrasha Logo" />
        </div>
      </p>
    </section>
  )
}

export default LogoImg

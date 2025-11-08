import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu } from "lucide-react"; // 3-dot icon

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div data-aos='fade-down' className='fixed top-0 right-0 left-0 z-100  bg-gradient-to-l bg-pink-200 via-gray-100 from-pink-200 '>

      <div className='flex justify-between items-center px-4 py-2'>

        {/* Logo */}
        <img onClick={() => navigate('/logo')} className='w-12 h-12 rounded-full cursor-pointer' src="/image/logo.jpg" alt="Adatala Dakhil Madrasha Logo" />

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-4'>
          <NavLink className='text-white bg-black rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/">Home</NavLink>
          <NavLink className='text-white  bg-black rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/about">About</NavLink>
          <NavLink className='text-white  bg-black rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/teachers">Teachers</NavLink>
          <NavLink className='text-white  bg-black rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/contact">Contact</NavLink>
          <NavLink className='text-white bg-green-500  rounded px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/login">Login</NavLink>
        </div>

        {/* Get More Button (Desktop only) */}
        <div className=' '>
          <button onClick={() => navigate('/getstart')} className='border border-blue-400  text-black hover:text-white py-1 px-6 rounded hover:scale-95 duration-300 hover:bg-blue-600 transition '>
            <NavLink to='/getmore'>Get More</NavLink>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className=" md:hidden flex flex-row items-center justify-center gap-3 pb-1  border-t border-gray-100 bg-gray-100/60">
          <NavLink className='text-white border bg-black rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink className='text-white border bg-black rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink className='text-white border bg-black rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/teachers" onClick={() => setOpen(false)}>Teachers</NavLink>
          <NavLink className='text-white border bg-black rounded px-1 hover:text-blue-500 hover:font-bold transition duration-500' to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink className='text-white border bg-green-500 rounded px-2 hover:text-blue-500 hover:font-bold transition duration-500' to="/login" onClick={() => setOpen(false)}>Login</NavLink>

        </div>
      )}
    </div>
  )
}

export default Header;

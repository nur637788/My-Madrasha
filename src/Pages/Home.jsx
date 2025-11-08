import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-20 '>
      <div data-aos='fade-down' className="overflow-hidden whitespace-nowrap mt-6  ">
        <div className="rounded-full h-10 items-center px-5 inline-flex animate-marquee space-x-4 bg-gradient-to-l bg-amber-200 via-pink-400 from-blue-600 ">
          <p>Come for Education, ***<b>Adatala Darul Hedayat Dakhil Madrasa</b>*** Enter the go out for Service.</p>
        </div>
      </div>


      <section data-aos='zoom-in' className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="ml-3">
          <h2 className="mb-2 text-2xl lg:text-5xl font-bold bg-gradient-to-l bg-purple-500 via-blue-800  bg-clip-text text-transparent ">
            Welcome to Our Website
          </h2>
          <p className="text-gray-900 leading-relaxed text-1xl">
            <b>Adatala Darul Hedayat Dakhil Madrasha</b> is a renowned Islamic educational institution dedicated to spreading the light of knowledge. Along with modern education, we emphasize moral and spiritual development based on the Qur’an and Sunnah.
          </p>
        </div>


        {/* Image */}
        <div data-aos='zoom-out' className="flex justify-center">
          <h2 className='absolute z-50 mt-[32px] text-black text-2xl'>Adatala Dakhil Madrasha</h2>
          <img src="/image/image.jpg" alt="adatala dakhil madrasha"
            className="relative border-8 border-blue-500 rounded-2xl shadow-xl duration-300 hover:scale-105 hover:shadow-blue-700 h-60 w-full max-w-md object-cover" />
        </div>

        {/* 3 Buttons */}
        <div data-aos='zoom-in' className='flex flex-wrap  gap-2'>
          <button onClick={() => navigate('/headmassage')} className="px-4 py-2 mt-5 bg-pink-500 w-fit hover:bg-pink-800 hover:font-bold hover:scale-95 text-white rounded shadow-lg transition duration-300 cursor-pointer">
            Massage of Head
          </button>
          <button onClick={() => navigate('/sscresult')} className="px-4 py-2 mt-5 bg-pink-500 w-fit hover:bg-pink-800 hover:font-bold hover:scale-95 text-white rounded shadow-lg transition duration-300 cursor-pointer">
            More Details
          </button>
          <button onClick={() => navigate('/admin')} className="px-4 py-2 mt-5 border border-blue-600  w-fit hover:bg-pink-800 hover:font-bold hover:text-white hover:scale-95 text-black rounded-full shadow-lg transition duration-300 cursor-pointer">
            Admin Dashboard
          </button>
        </div>


        {/* Animation Style */}
        <style jsx>{`
@keyframes marquee {
0% { transform: translateX(100%); }
100% { transform: translateX(-100%); }
}
.animate-marquee {
animation: marquee 20s linear infinite;
}
`}</style>
      </section>


      {/* Madrasah text */}
      <div className='p-5'>
        <p data-aos='zoom-in' className='max-w-full m-auto border-4 rounded p-5 bg-gray-50 font-light'>Adatala Darul Hedayat Dakhil Madrasha is an Islamic educational institution committed to providing both religious and modern education in a balanced way. Since its establishment, the madrasha has been dedicated to nurturing students with strong moral values, spiritual guidance, and academic excellence. Our institution aims to prepare students to become knowledgeable, disciplined, and socially responsible individuals who can contribute positively to society while staying firmly rooted in the teachings of the Qur’an and Sunnah.</p>
      </div>

      {/* Madrasah Board Button */}
      <div data-aos='zoom-in' className='mx-5 my-10 max-w-full h-40 bg-blue-300 rounded-md m-auto'>
        <p className='pt-10 md:text-xl text-center'>
          Bangladesh Madrasah Education Board, Dhaka <br /> <br />
          <a href="https://www.ebmeb.gov.bd/index.php?type=erps" target='_blank' className=' rounded-md bg-white px-10 py-2 hover:bg-blue-950 hover:text-white hover:font-bold transition'>Join Now</a>
        </p>
      </div>

    </div>
  )
}

export default Home;
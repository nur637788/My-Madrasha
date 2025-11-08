import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'


function About() {
  const navigate = useNavigate();
  return (

    <div>
      <div className='mt-20 mx-5'>
        <header className="mb-7 text-center underline">
          <h2 className=" text-4xl font-bold text-pink-800">This <span className='text-blue-600'>About</span></h2>
        </header>
        <section>
          <div data-aos='fade-down' className='md:max-w-6xl m-auto bg-blue-300 rounded p-5'>
            <h2 className='text-center text-2xl font-bold'>Adatala Darul Hedayat Dakhil Madrasha</h2>
            <p className='mt-3'>It is a <b>Non-government Madrasha</b>. This institute's EIIN number is <b>123808</b>. This institute is located in <b>Adatala 199, Naogaon, Rajshahi Division</b>. It's geographical area is <b>Plain Land</b>. It offers classes up to <b>Dakhil level</b>. Please refer to the table below for information on the EIIN, location, contact number, MPO status, and additional details.</p>
          </div>



          <div data-aos='fade-up' className='mt-5'>
            <h1 className='text-center text-3xl font-bold p-5'>Information At a Glance</h1>
            <table className='m-auto bg-gray-200/40'>
              <tr className="">
                <th className='border'>Information</th>
                <th className='border'>Details</th>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>EIIN</td>
                <td className='border px-2 py-1 '>123808 </td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Location</td>
                <td className='border px-2 py-1 '>Adatala 199, Sapahar, Naogaon</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Contact Info	</td>
                <td className='border px-2 py-1 '><button onClick={() => navigate('/contact')} className='text-blue-500'>View Contact</button></td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Institute Type</td>
                <td className='border px-2 py-1 '>Madrasha</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Offering classes up to	</td>
                <td className='border px-2 py-1 '>Dakhil Level</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Division</td>
                <td className='border px-2 py-1 '>RAJSHAHI</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>District</td>
                <td className='border px-2 py-1 '>NAOGAON</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Thana</td>
                <td className='border px-2 py-1 '>SAPAHAR</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Post office	</td>
                <td className='border px-2 py-1 '>PATHARI</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Union name</td>
                <td className='border px-2 py-1'>PATHARI</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Mauza name	</td>
                <td className='border px-2 py-1 '>BAIKUNTHAPUR</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Affiliation</td>
                <td className='border px-2 py-1 '>RECOGNIZE</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>MPO Status	</td>
                <td className='border px-2 py-1 '>YES</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Surrounding area	</td>
                <td className='border px-2 py-1 '>RURAL</td>
              </tr>
              <tr className='border'>
                <td className='border px-2 py-1 '>Surrounding Geography	</td>
                <td className='border px-2 py-1 '>PLAIN LAND</td>
              </tr>
            </table>
          </div>

        </section>

        <div className=' rounded-lg my-10 p-2 bg-gradient-to-t bg-blue-200 via-gray-800 from-blue-400 '>
          <div data-aos='fade-down' className='border rounded-lg mb-4 p-2 md:p-5 bg-white'>
            <h2 className='text-2xl text-center pb-2 text-amber-800'>History of the Organization</h2>
            <p className='text-center px-1 '>To spread Islamic education in the area, a meeting was held in the presence of respected people in the area at the initiative of local educationists in the presence of respected people in the area. In that meeting, the madrasa was established at its present location in 1994 with the tireless efforts of various people and received government recognition in 1998 as Adatola Dakhil Madrasa. Since the establishment of this madrasa till today, the Madrasa Management Committee formed at different times has fulfilled its responsibilities with skill and achieved overall development of the madrasa. It is mentioned that young students from various villages including <strong>Adatola, Jalsuka, Kawabhasha, Kariapara, Haripal, Purba Adatola</strong> come to receive lessons in this madrasa.</p>
          </div>
          <div data-aos='zoom-in' className='border rounded-lg mb-4 p-2 md:p-5 bg-white'>
            <h2 className='text-2xl text-center pb-2 text-amber-500'>Our Vision</h2>
            <p className='text-center px-1 '>At <i>Adatala Darul Hedayat Dakhil Madrasha</i>,our vision is to nurture students with the light of both Islamic teachings and modern education. We strive to build a generation enriched with knowledge, discipline, morality, and spirituality, who can contribute positively to society and serve as responsible citizens and true servants of Allah (SWT).</p>
          </div>

          <div data-aos='fade-up' className='border rounded-lg  p-2 md:p-5 bg-white'>
            <h2 className='text-2xl text-center pb-2 text-amber-700'>Our Mission</h2>
            <p className='text-center px-1 '><u>Adatala Darul Hedayat Dakhil Madrasha</u> 👉 our mission is to provide quality Islamic and modern education in a nurturing environment. We strive to build strong moral and spiritual values based on the Qur’an and Sunnah while ensuring academic excellence through dedicated teaching and guidance. Our goal is to develop responsible, ethical, and compassionate individuals who can contribute positively to society, and to prepare our students for both worldly success and eternal prosperity."</p>
          </div>
        </div>

        {/* Team Button */}
        <div data-aos='zoom-in' className='my-10 w-full h-40 bg-blue-300 m-auto rounded'>
          <p className='pt-10 md:text-xl text-center'>
            Join Our Team
            with <br /> <br />
            <button onClick={() => navigate('/nurdev')} className=' rounded-md bg-white px-10 py-2 hover:bg-blue-950 hover:text-white hover:font-bold transition'>Contact Us</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

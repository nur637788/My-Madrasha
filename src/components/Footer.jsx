import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaEnvelope, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-blue-100">
      <div data-aos='fade-up' className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 px-4 md:px-10 py-3">
        {/* Left Section */}
        <div>
          <div className="flex flex-col gap-2 space-x-2">
            <img onClick={() => navigate('/logo')}
              src="/image/logo.jpg"
              alt="Adatala Dakhil Madrasha Logo"
              className="w-15 h-15 bg-gray-100 rounded-full  cursor-pointer"
            />
            <h2 className="text-lg font-bold text-start ">Adatala Darul Hedayat Dakhil Madrasha</h2>
          </div>
          {/* Socil Link */}
          <h3 className="mt-2 font-semibold">Follow Now</h3>
          <div className="flex space-x-3 mt-2">
            <a href="http://www.facebook.com/nur637788/" target="_blank" className="p-2 bg-black text-white rounded-md hover:bg-blue-300">
              <FaFacebookF />
            </a>

            <a href="#" target="_blank" className="p-2 bg-black text-white rounded-md hover:bg-blue-300">
              <FaLinkedinIn />
            </a>

            <a href="#" target="_blank" className="p-2 bg-black text-white rounded-md hover:bg-blue-300">
              <FaTwitter />
            </a>

            <a href="#" className="p-2 bg-black text-white rounded-md hover:bg-blue-300">
              <FaYoutube />
            </a>

          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-2">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-900 ">
            <li className="hover:underline hover:font-bold text-black"><button onClick={() => navigate('/about')} className="cursor-pointer">About Us</button></li>
            <li className="hover:underline hover:font-bold text-black"><button onClick={() => navigate('/teachers')} className="cursor-pointer">Teachers</button></li>
            <li className="hover:underline hover:font-bold text-black"><button onClick={() => navigate('/contact')} className="cursor-pointer">Contact Us</button></li>
            <li className="hover:underline hover:font-bold text-black"><button onClick={() => navigate('/login')} className="cursor-pointer">Login</button></li>
            <li className="hover:underline hover:font-bold text-black"><button onClick={() => navigate('/team')} className="cursor-pointer">Team</button></li>
            <li className="hover:underline hover:font-bold text-black"><button onClick={() => navigate('/privacypolicy')} className="cursor-pointer">Privacy & Policy</button></li>


          </ul>
        </div>

        {/*  Categories */}
        <div>
          <h3 className="font-bold mb-2">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-900">
            <li className="hover:underline hover:font-bold text-black"><a href="https://nur637788protfolio.netlify.app/" target="_blank">Web Developer</a></li>
            <li className="hover:underline hover:font-bold text-black"><a href="https://uiuxweb.netlify.app/">Web Designer</a></li>
            <li className="hover:underline hover:font-bold text-black"><a href="https://nurprotfolio.netlify.app/" target="_blank">Fronend Developer</a></li>
            <li className="hover:underline hover:font-bold text-black"><a href="https://funcunalcalculator.netlify.app/" target="_blank">Programming</a></li>
            <li className="hover:underline hover:font-bold text-black"><a href="https://nurprotfolio.netlify.app/contact" target="_blank">SEO</a></li>
            <li className="hover:underline hover:font-bold text-black"><a href="https://bteb.gov.bd/site/page/a34671e3-a81c-4927-834f-19d6afc41217/Diploma-Level" target="_blank">Diploma</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-bold mb-2">Contact Info</h3>
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-black text-white rounded-md">
              <FaWhatsapp />
            </div>
            <span className="text-sm text-gray-900 hover:underline hover:font-bold"><a href="tel:+88 01798090414" >+88 01798090414</a></span>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-black text-white rounded-md">
              <FiMail />
            </div>
            <span className="text-sm text-gray-900 hover:underline hover:font-bold"><a href="mailto:adatalad.m.@gmail.com" target="_blank">Send Mail</a></span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-black text-white rounded-md">
              <FiMapPin />
            </div>
            <span className="text-sm text-gray-900 hover:underline hover:font-bold">
              <a href="https://www.google.com/maps/place/ADATOLA+DAKHIL+MADRASA/@25.1546539,88.4619878,17z/data=!4m14!1m7!3m6!1s0x39fb139373ba01eb:0x429dcafe8d26a87!2sAdatala+Central+Mosque!8m2!3d25.1541344!4d88.4582703!16s%2Fg%2F11s17n7m3_!3m5!1s0x39fb13a983ae7b45:0x329eebc0182dfbaf!8m2!3d25.1539398!4d88.4645691!16s%2Fg%2F11p00xblfq?hl=hi&entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Adatala 199, Sapahar, Naogaon</a>

            </span>
          </div>
        </div>
      </div>

      {/* Copy Right */}
      <hr className=" text-gray-400" />
      <div className="text-center text-black font-semibold bg-blue-200/20 text-sm py-3">
        <button onClick={() => navigate('/nurdev')} className="cursor-pointer" >&copy; Protect by Abdun Nur.</button>
      </div>
    </footer>
  );
};

export default Footer;

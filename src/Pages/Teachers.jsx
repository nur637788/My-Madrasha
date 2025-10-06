import React, { useState, useEffect,} from 'react';
import TecherCard from '../components/TecherCard';
import TeacherDetails from '../components/TecherDetels';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function Teachers() {
     const navigate = useNavigate();
  const [allData, setAllData] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    fetch("/TechersData.json") // Public ফোল্ডারে থাকলে
      .then(res => res.json())
      .then(data => setAllData(data));
  }, []);

  return (
    <div>
    <div className="mt-27 m-10">
      <header className="mb-7 text-center underline">
        <h2 className=" text-4xl font-bold text-pink-800">List of <span className='text-blue-600'>Teachers</span></h2>
      </header>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {allData.map((data) => (
          <TecherCard
            key={data.id}
            id={data.id}
            age={data.age}
            img={data.img} 
            title={data.name}
            podobi={data.podobi}
            onClick={() => setSelectedTeacher(data)} // এখানে ক্লিক করলে Teacher ধরা হবে
          />
        ))}
      </div>

      {/* ক্লিক করার পর ডিটেইলস দেখাবে */}
      {selectedTeacher && (
        <TeacherDetails teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />
      )}


       <div  className='mt-20 w-full h-60 bg-blue-300 m-auto rounded'>
        <p data-aos='fade-up' className='pt-10 md:text-xl text-center'>
          Don’t Waste Your Time. Take Admission in Adatala Darul Hedayat Dakhil Madrasha.
          <br />
          Build Your Carrier with Us <br /> <br />
        <button onClick={()=>navigate('/contact')} className=' rounded-md bg-white px-10 py-2 hover:bg-blue-950 hover:text-white hover:font-bold transition'>Join Now</button>
        </p>
      </div>
    </div>
        <Footer />
    </div>
  );
}

export default Teachers;

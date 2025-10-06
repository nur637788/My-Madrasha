import React from 'react';

function TecherCard({id, img, title, podobi, onClick }) {

  return (
    <div
      onClick={onClick}
      className="p-5 border rounded-xl shadow-md shadow-blue-900 cursor-pointer hover:shadow-lg transition">

      <div data-aos='zoom-in'>
        <div  className='w-40 h-40 m-auto'>
            <img data-aos='zoom-in' src={img} alt={title} loading='lazy' className="w-full h-full  rounded-full" />
        </div>
        <div className='text-center mt-5'>
            <h2 className="text-lg"><span className='font-bold'>ID:</span> {id}</h2>
            <div className='flex gap-1 justify-center text-xl '>
              <span className='font-bold'>Name:</span>
              <h2 className="uppercase"> {title}</h2>
            </div>
            <div className='flex gap-1 justify-center text-md'>
              <span className='font-bold'>Position:</span>
              <h2 className="uppercase "> {podobi}</h2>
            </div>
        </div>

      </div>
    </div>
  );
}

export default TecherCard;

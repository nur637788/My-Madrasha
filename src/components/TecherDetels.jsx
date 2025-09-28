import React from 'react';

function TeacherDetails({ teacher, onClose }) {
  return (
    <div className="mt-19 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white font-semibold px-10 py-8 rounded-xl shadow-lg w-md max-w-xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-2 text-gray-800 hover:text-red-500"
        >
          ✖
        </button>

        <div className='w-50 h-50 m-auto'>
            <img src={teacher.img} alt={teacher.title} className="w-full h-full  rounded-md" />
        </div>
        <div className='flex text-xl justify-center gap-2 my-2'>
            <h2 className="font-bold">Name: </h2>
            <h2 className="uppercase">{teacher.name}</h2>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p className=""><strong>ID:</strong> {teacher.id}</p>
            <p className=""><strong>Age:</strong> {teacher.age}</p>
        </div><hr />
        <div className='flex justify-between'>
            <h2 className=" font-bold">Gender: </h2>
            <h2 className="">{teacher.gender}</h2>
        </div><hr />
        <div className='flex justify-between'>
            <h2 className=" font-bold">Marital status: </h2>
            <h2 className="">Married</h2>
        </div><hr />
        <div className='flex justify-between'>
            <h2 className=" font-bold">Religion: </h2>
            <h2 className="">Islam</h2>
        </div><hr />
        <div className='flex justify-between'>
            <h2 className=" font-bold">@username: </h2>
            <h2 className="lowercase">{teacher.username}</h2>
        </div><hr />
        <div className='flex justify-between'>
            <h2 className=" font-bold">Email: </h2>
            <h2 className="lowercase underline">{teacher.email}</h2>
        </div><hr />
         <div className='flex justify-between'>
            <h2 className=" font-bold">Mobail No: </h2>
            <h2 className="">{teacher.mobail}</h2>
        </div><hr />
         <div className='flex justify-between'>
            <h2 className=" font-bold">Position: </h2>
            <h2 className="lowercase">{teacher.podobi}</h2>
        </div><hr />
        <div className='flex justify-between'>
            <h2 className=" font-bold">Joining Date: </h2>
            <h2 className="">{teacher.joining}</h2>
        </div><hr />
        <div className='flex justify-between'>
            <h2 className=" font-bold">Workplace: </h2>
            <h2 className="">{teacher.Workplace}</h2>
        </div><hr />
        <div className='flex justify-between '>
            <h2 className="font-bold">Institute Name: </h2>
            <h2 className="">{teacher.institute}</h2>
        </div><hr />
        <div className='flex justify-between'>
            <h2 className=" font-bold">Parmanent address: </h2>
            <h2 className="">{teacher.address}</h2>
        </div><hr />
  
      </div>
    </div>
  );
}

export default TeacherDetails;

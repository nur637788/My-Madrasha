import React from 'react'

function NurDev() {
  return (
    <div>
      <div className="mt-25 p-10 max-w-xl m-auto border rounded-xl shadow-md shadow-blue-900 cursor-pointer hover:shadow-lg transition">

      <div>
        <div className='w-50 h-50 m-auto'>
            <img src="/image/NurDev image.jpg" alt="" className="w-full h-full  rounded-full" />
        </div>
        <div className='text-center mt-5'>
            <h2 className="text-lg"><span className='font-bold'>ID: </span><a className='underline text-blue-600' href="https://www.bing.com/search?pglt=931&q=nur637788&cvid=71457f9011ee4e458fc760ca24ba65dc&gs_lcrp=EgRlZGdlKgYIABBFGDsyBggAEEUYOzIGCAEQRRg7MgYIAhBFGDsyBggDEEUYOzIGCAQQRRhBMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg8MgYICBBFGDzSAQg0OTI1ajBqMagCCLACAQ&FORM=ANNTA1&PC=U531" target='_blank'>nur637788</a></h2>
            <div className='flex gap-1 justify-center text-xl '>
              <span className='font-bold'>Name:</span>
              <h2 className="uppercase">Md. Abdun Nur </h2>
            </div>
            <div className='flex gap-1 justify-center text-md'>
              <span className='font-bold'>Position:</span>
              <h2 className="uppercase "> Fronend Devepoler</h2>
            </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default NurDev

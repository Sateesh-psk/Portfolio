import React from 'react'

function ProjectProcess(data) {
  return (
    <div className='lg:ml-10 sm:ml-1'>
      {data.process.map((e,i)=>(
        <div className='mb-2'>
          <h1 className='text-2xl text-blue-300 font-semibold'>{e.heading}</h1>
          <h1 className='lg:ml-16 md:ml-10 text-sm text-slate-300'>{e.desc}</h1>
        </div>
      ))}
    </div>
  )
}

export default ProjectProcess
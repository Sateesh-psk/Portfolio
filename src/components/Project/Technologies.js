import React from 'react'

const Technologies=(props)=> {
  return (
    <div className='col-span-4 sm:col-span-1 bg-slate-500 p-3 rounded-md'>
      <h2 className=' text-center tracking-widest text-xl'>{props.name}</h2>
      {props.data.map((e,i)=>(
        <div className=' text-slate-200 my-3'>{e}</div>
        ))}
    </div>
  )
}

export default Technologies
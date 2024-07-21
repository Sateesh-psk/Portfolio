import React from 'react'
import Popup from 'reactjs-popup'
import Projects from '../../Data/Projects'
function ShortProject(props) {
  let element=Projects[props.id]
  return (
    <div className={` row-span-1 hover bg-slate-500 rounded-lg shadow-xl
    hover:scale-105 hover:shadow-2xl transition duration-200 ease-in-out min-h-fit grid
    `}>
        <div className=' p-3'>
          
          <h1 className=' font-medium text-xl px-1 text-center'>{element.name}</h1>
          <hr />
          <h2 className=' text-slate-950 text-lg tracking-widest'>Technologies</h2>
          <div className='grid ml-10'>
            {element.technologiesShort.map((e,i)=>(
              <h2 className='text-slate-200'>{e}</h2>
            ))}
          </div>
          <div className='grid grid-cols-3 gap-1'>
            <div className=' text-slate-950 text-lg tracking-widest'>Role</div>
            <div className='col-span-2 text-slate-200'>{element.roleShort}</div>
          </div>
          <h2 className=' text-slate-800 text-lg'>Outcome</h2>
          <h2 className=' text-sm tracking-normal text-slate-300'>{element.outcomeShort}</h2>
          
        </div>
        <button className=' rounded-b-lg w-full bg-slate-600 py-4' onClick={()=>props.openLong()}>view more..</button>
        {/* <Popup trigger=
            {<button className=' rounded-b-xl w-full bg-slate-600'>view more..</button>} 
            modal nested>
            {
                close => (
                    <div className='modal bg-slate-500 p-3'>
                        <div className=''>
                            Welcome to GFG!!!u4by4
                        </div>
                        <div>
                            <button onClick=
                                {() => close()}>
                                    Close modal
                            </button>
                        </div>
                    </div>
                )
            }
        </Popup> */}
      </div>
  )
}

export default ShortProject
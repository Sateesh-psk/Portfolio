import React from 'react'
import { useState } from 'react'
import Projects from '../../Data/Projects'
import LongProject from './LongProject'
import ShortProject from './ShortProject'
function ProjectsComponent(props) {
  let element=Projects[props.id]
  let [long,setLong]=useState(false)
  let closeLong =()=>{
    setLong(false)
  }
  let openLong =()=>{
    setLong(true)
  }
  return (
    <>
      {long && <LongProject id={0} close={closeLong}/>}
      {!long && <ShortProject id={0} openLong={openLong} />}
    </>
  )
}

export default ProjectsComponent
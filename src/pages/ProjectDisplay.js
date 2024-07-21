import React from 'react'
import ProjectsComponent from '../components/Project/ProjectsComponent'
import Projects from '../Data/Projects'
const ProjectDisplay=()=> {
  return (
    <div className={` bg-gradient-to-tr from-blue-200 to-blue-950  px-6 py-48 `}>
      <h2 className=' tracking-extra-widest text-2xl text-center my-3'>PROJECTS</h2>

      <div className={`grid sm:grid-cols-3 gap-2 lg:grid-cols-4 grid-flow-row-dense text-white tracking-wider`}>
        {Projects.map((e,i)=><ProjectsComponent id={e.id} />)}
      </div>
    </div>
  )
}

export default ProjectDisplay

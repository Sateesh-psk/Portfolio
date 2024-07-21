import React, { useState, useEffect } from 'react'
import Projects from '../../Data/Projects'
import ProjectProcess from './ProjectProcess'
import Technologies from './Technologies'

const Title = (props) => {
  return (
    <h2 className='text-2xl text-center lg:text-left lg:ml-48 tracking-widest mb-2 pt-6'>{props.name}</h2>
  )
}

const TitleDesc = (props) => {
  return (
    <h3 className='m-1 text-slate-300'>{props.data}</h3>
  )
}

function LongProject(props) {
  const [isVisible, setIsVisible] = useState(false);
  const element = Projects[props.id];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setTimeout(() => {
      props.close();
    }, 750); // Duration should match the transition duration
    setIsVisible(false);
  };

  return (
    <div className={` row-span-2 snap-mandatory snap-y scrollbar-none scroll-smooth p-3 col-span-3 bg-slate-600 
    rounded-xl shadow-2xl overflow-y-scroll max-h-dvh transition-all duration-700 ${isVisible ? 'w-full h-full' : 'w-1/3 h-1/2'}`}>
      <div className='snap-start'>
        <h1 className='font-semibold text-center text-3xl mb-3'>{element.name}</h1>
        <TitleDesc data={element.description} />
      </div>
      <div className='snap-start '>
        <Title name='Technologies' />
        <div className='grid grid-cols-4 gap-2'>
          {element.technologies.frontend.length > 0 && <Technologies name='frontend' data={element.technologies.frontend} />}
          {element.technologies.backend.length > 0 && <Technologies name='backend' data={element.technologies.backend} />}
          {element.technologies.database.length > 0 && <Technologies name='database' data={element.technologies.database} />}
          {element.technologies.testing.length > 0 && <Technologies name='testing' data={element.technologies.testing} />}
          {element.technologies.other.length > 0 && <Technologies name='other' data={element.technologies.other} />}
        </div>
      </div>
      <div className='snap-start'>  
        <Title name='Role' />
        <TitleDesc data={element.role} />
        {element.codeLink && <a href={element.codeLink}><button className='rounded-l-lg py-2 w-1/2 text-center transition duration-300 bg-slate-200 hover:bg-slate-400 text-black' style={{ letterSpacing: '0.3rem' }}>
          code link (GitHub)
        </button></a>}
        {element.demoLink && <a href={element.demoLink}><button className='rounded-r-lg py-2 w-1/2 text-center transition duration-300 bg-blue-300 hover:bg-slate-400 text-black' style={{ letterSpacing: '0.3rem' }}>
          demo link (Render)
        </button></a>}
      </div>
      <div className='snap-start'>
        <Title name='Process' />
        <ProjectProcess process={element.process} />
      </div>
      <div className='snap-end'>
        <Title name='Outcome' />
        <TitleDesc data={element.outcome} />
        <button className='w-full text-red-400 py-1' onClick={handleClose}>view less</button>
      </div>
    </div>
  )
}

export default LongProject

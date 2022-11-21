import React, { useEffect, useState } from 'react'
import CardProject from '../../components/CardProject/CardProject'
import './Projects.css'
import {Props} from '../../components/CardProject/CardProject'
export const Projects = () => {
  const [images, setImages] = useState([])
 
  useEffect(() => {
    const fetchDataJSON=async()=> {
      const response = await fetch('/data/dataProjects.json')
      setImages(await response.json())
      
    }
    fetchDataJSON()
  },[])
  console.log(images); 
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projects-wrapper'>
        {images&&images.map((el:Props)=><CardProject 
        key={el.id}
        src={el.src}
        path={el.path}
        title={el.title}
        technology={el.technology}
        id={el.id}

        />)}
      </div>
    </div>
  )
}

export default Projects

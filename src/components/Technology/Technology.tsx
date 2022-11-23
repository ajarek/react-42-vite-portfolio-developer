import React from 'react'
import './Technology.css'

type Props = {
  name: string
  experience: string
}

const Technology = ({ name, experience }: Props) => {
  return (
    <div className='technology'>
      <h1>{name}</h1>
      <p>{experience} Years Experience</p>
    </div>
  )
}

export default Technology

import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import './InfoProfil.css'

const InfoProfil = () => {
  return (
    <div className='info-profil'>
      <div className="wrapper-info-profil">
      <h1>Nice to meet you! <br />I`m @jarek.</h1>
      <p>Based the Poland, I`m front-end developer<br />
      passionate about building accessible web apps<br />
      that users love</p>
      </div>
      <div className="wrapper-info-profil tel"><FaPhoneAlt/>  <p>573219230</p></div>
    </div>
  )
}

export default InfoProfil

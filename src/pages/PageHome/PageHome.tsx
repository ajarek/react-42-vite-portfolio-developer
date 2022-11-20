import React from 'react'
import Profil from '../../components/Profil/Profil'
import InfoProfil from '../../components/InfoProfil/InfoProfil'
import './PageHome.css'
export const PageHome = () => {
  return (
    <div className='home'>
      <header><InfoProfil/><Profil/></header>
      
      <section></section>
    </div>
  )
}

export default PageHome
import React from 'react'
import Profil from '../../components/Profil/Profil'
import InfoProfil from '../../components/InfoProfil/InfoProfil'
import './PageHome.css'
import Technology from '../../components/Technology/Technology'
export const PageHome = () => {
  return (
    <div className='home'>
      <header><InfoProfil/><Profil/></header>
      
      <section>
        <Technology
        name={'HTML'}
        experience={'4'}
        />
        <Technology
        name={'HTML'}
        experience={'4'}
        />
        <Technology
        name={'HTML'}
        experience={'4'}
        />
        <Technology
        name={'HTML'}
        experience={'4'}
        />
        <Technology
        name={'HTML'}
        experience={'4'}
        />
        <Technology
        name={'HTML'}
        experience={'4'}
        />
      </section>
    </div>
  )
}

export default PageHome
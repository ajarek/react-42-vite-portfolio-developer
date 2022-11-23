import Profil from '../../components/Profil/Profil'
import InfoProfil from '../../components/InfoProfil/InfoProfil'
import './PageHome.css'
import Technology from '../../components/Technology/Technology'
export const PageHome = () => {
  return (
    <div className='home'>
      <header>
        <InfoProfil />
        <Profil />
      </header>

      <section>
        <Technology
          name={'HTML'}
          experience={'4'}
        />
        <Technology
          name={'CSS'}
          experience={'4'}
        />
        <Technology
          name={'JavaScript/TS'}
          experience={'3'}
        />
        <Technology
          name={'React'}
          experience={'3'}
        />
        <Technology
          name={'NodeJS'}
          experience={'2'}
        />
        <Technology
          name={'Database: Rel./noRel.'}
          experience={'2'}
        />
      </section>
    </div>
  )
}

export default PageHome

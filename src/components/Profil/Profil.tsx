import { FaGithub, FaTwitter, FaLinkedinIn, FaFacebook } from 'react-icons/fa'
import './Profil.css'
const Profil = () => {
  return (
    <div className='profil'>
      <div className='all-socials'>
        <div className='social'>
          <a href='#'>
            <FaGithub />
          </a>
        </div>
        <div className='social'>
          <a href='#'>
            <FaFacebook />
          </a>
        </div>
        <div className='social'>
          <a href='#'>
            <FaLinkedinIn />
          </a>
        </div>
        <div className='social'>
          <a href='#'>
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className='img'>
        <img
          src='/public/profil1.png'
          alt=''
        />
      </div>
    </div>
  )
}

export default Profil

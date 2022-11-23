import { FaGithub, FaTwitter, FaLinkedinIn, FaFacebook } from 'react-icons/fa'
import { Form } from '../../components/Form/Form'
import './Contact.css'
export const Contact = () => {
  return (
    <div className='contact'>
      <div className='left-wrapper'>
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I <br /> could
          help.Please fill in the form, and I`ll get back
          <br /> to you as soon possible.
        </p>
      </div>
      <div className='right-wrapper'>
        <Form />
      </div>
      <div className='footer'>
        <a
          className={'link'}
          href='mailto:ajarek@poczta.onet.pl'
        >
          <div className='logo'>
            <img
              src='my-logo.png'
              alt='logo'
            />
            @jarek
          </div>
        </a>
        <div className='socials'>
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
      </div>
    </div>
  )
}

export default Contact

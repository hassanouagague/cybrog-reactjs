import './Hero.css'

import { PrimaryButton } from '../../components'


const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>Welcome to Cybrog</h6>
            <h4 className='hero-title'><em>Browser</em>Our popular Games Here</h4>

             <PrimaryButton>Browser Now</PrimaryButton>
            
            {/*<div className='main-button'>
                <a href='browser.html'>Browser Now</a>
            </div>*/}
        </div>
    </div>
  )
}

export default Hero
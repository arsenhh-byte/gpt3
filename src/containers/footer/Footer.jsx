import React from 'react'
import './footer.css'
import gpt3logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>

      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links_logo'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt='logo'/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat nam dolorum est dolorem, doloremque error, debitis eius placeat impedit veniam exercitationem corrupti officiis repudiandae enim consequatur quia. Minima, ad. </p>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <h4>Overons</h4>
        <h4>Social Media</h4>
        <h4>Counters</h4>
        <h4>Contact</h4>

      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Company</h4>
        <h4>Terms & Conditions</h4>
        <h4>Privacy Policy</h4>
       

      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Get in Touch</h4>
        <h4>Location</h4>
        <h4>085-132567</h4>
       <h4>info@payment</h4>

      </div>
      </div>
<div className='gpt3__footer-copyright'> 
<p>@2021 GPT-3. All rights reserved.</p>
</div>
      </div>
  )
}

export default Footer
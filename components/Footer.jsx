import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div>
        <p>2022 TA Electronics - All Rights Reserved</p>
        <p className='icons'><AiFillInstagram /> <AiOutlineTwitter /></p>
      </div>
      <div className="final">
				<small><a href="https://thomasaurelius.com"><span>&copy; </span> <strong>Thomas Aurelius </strong></a></small>
			</div>

    </div>
  )
}

export default Footer
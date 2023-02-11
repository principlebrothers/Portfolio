import React from 'react'
import './Details.scss'

function Details({ Resume }) {

  const handleDownload = () => {
    window.open(Resume, '_blank')
  }

  const handleContact = () => {
    window.location.href = '#contact'
  }

  return (
    <div className='details'>
      <button
        type='button'
        className='resume__btn'
        onClick={handleDownload}
      >
        Hire Me
      </button>
      <button
        type='button'
        className='contact__me'
        onClick={handleContact}
      >
        Contact Me
      </button>
    </div>
  );
}

export default Details
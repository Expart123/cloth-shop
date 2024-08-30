import React from 'react'
import './NewLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers On Your Email</h1>
<p>Subscribe to our newLetter and stay updated</p>
    <div>
        <input type='email' placeholder='your Email id' />
        <button>Subscribe</button>
    </div>
</div>
  )
}

export default NewsLetter

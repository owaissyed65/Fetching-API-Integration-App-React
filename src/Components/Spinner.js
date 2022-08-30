import React from 'react'
import gif from '../gif/output-onlinegiftools.gif'
const Spinner = () => {
  return (
    <div className='container d-flex justify-content-center text-center'>
      <img src={gif} style={{height:'95px'}} alt="..."/>
    </div>
  )
}

export default Spinner

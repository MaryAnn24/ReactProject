import React from 'react'
import './Mountain.css'

function Mountain(props) {
  return (
    <div className='mountain_item'>
        <img src={props.src} alt={props.text} className={props.class} />
    </div>
  )
}

export default Mountain
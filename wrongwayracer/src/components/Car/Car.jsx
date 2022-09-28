import React from 'react'
import './Car.css'

function Car(props) {
  return (
    <div>
        <img src={props.src} alt={props.text} className={props.class} />
    </div>
  )
}

export default Car
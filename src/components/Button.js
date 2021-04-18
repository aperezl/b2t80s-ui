import React from 'react'
import './Button.css'
function Button({ title, disabled }) {

  console.log('disabled', disabled)
  return (
    <button
      className = {`button ${disabled ? 'disabled': ''}`}
      disabled = {disabled}
    >
      {title}
    </button>
  )
}

export default Button

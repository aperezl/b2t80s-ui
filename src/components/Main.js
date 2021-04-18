import React from 'react'
import { getCPU } from '../lib/remote'
import Button from './Button'
import './Main.css'

function Main() {
  console.log(getCPU())
  return (
    <div className="container">
      <div className="item">
        <div className="container">
          <Button title="Stop" />
        </div>
        <div className="container">
          <Button title="Continue" disabled={true} />
          <Button title="Step" disabled={true} />
        </div>
      </div>
      <div className="item">
        <div className="container">
          <Button title="Stop on Interrup" />
        </div>
        <div className="container">
          <Button title="Step Line" disabled={true} />
          <Button title="Step Frame" disabled={true} />
        </div>
      </div>
    </div>
  )
}

export default Main

import React from 'react'
import { getCPU } from '../lib/remote'
import Button from './Button'
import './Main.css'
import Tabs from './Tabs'

function Main() {
  console.log(getCPU())
  return (
    <div className="main">
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
      <div className="container">
        <Tabs />
      </div>
    </div>
  )
}

export default Main

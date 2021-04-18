import React from 'react'
import TabItem from './TabItem'
import './Tabs.css'

function Tabs() {
  return (
    <div className="tabs">
      <TabItem title="CPU" active={true} />
      <TabItem title="LCD" />
    </div>
  )
}

export default Tabs

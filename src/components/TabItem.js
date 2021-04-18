import React from 'react'
import './TabItem.css'

function TabItem({ title, active }) {
  return (
    <div className={`tab-item ${active ? 'active' : ''}`}>
      { title }
    </div>
  )
}

export default TabItem

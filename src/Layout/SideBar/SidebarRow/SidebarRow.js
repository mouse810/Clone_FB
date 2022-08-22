import React from 'react'
import './SidebarRow.css'

const SidebarRow = (title) => {
    return (
        <div className='sidebarRow'>
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
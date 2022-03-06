import React from 'react'
import SideBar from '../SideBar/SideBar'
import TopGogers from '../Gogers/TopGogers'
import './GogersContent.css'

function GogersContent() {
    return (
        <div className='gogers-content'>
            <SideBar />
            <TopGogers />
        </div>
    )
}

export default GogersContent
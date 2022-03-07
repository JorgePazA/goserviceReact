import React from 'react'
import SideBar from '../SideBar/SideBar'
import TopUsers from '../Users/TopUsers'
import './UsersContent.css'

function UsersContent() {
    return (
        <div className='gogers-content'>
            <SideBar />
            <TopUsers />
        </div>
    )
}

export default UsersContent
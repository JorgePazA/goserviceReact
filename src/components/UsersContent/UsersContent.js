import React from 'react'
import SideBar from '../SideBar/SideBar'
import TopUsers from '../Users/TopUsers'
import './UsersContent.css'

function UsersContent() {
    return (
        <div className='users-content'>
            <SideBar />
            <TopUsers />
        </div>
    )
}

export default UsersContent
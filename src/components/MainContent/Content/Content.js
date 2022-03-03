import React from 'react'
import TotalGogers from './TotalGogerUser/TotalGogers'
import TotalUsers from './TotalGogerUser/TotalUsers'
import './Content.css'

function Content () {
    return(
        <div className = 'content-total'>
            <TotalGogers />
            <TotalUsers />
        </div>
    )
}

export default Content
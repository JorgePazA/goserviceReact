import React from 'react'
import FichaResumen from './FichaResumen/FichaResumen'
import './TopTotales.css'

function TopTotales (){
    return(
        <div className='top-totales'>
            <FichaResumen />
            <FichaResumen />
            <FichaResumen />
        </div>
    )
}

export default TopTotales
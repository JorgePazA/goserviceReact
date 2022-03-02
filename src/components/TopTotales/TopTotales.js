import React from 'react'
import FichaResumenUsuarios from './FichaResumen/FichaResumenUsuarios'
import FichaResumenGogers from './FichaResumen/FichaResumenGogers'
import FichaResumenCategories from './FichaResumen/FichaResumenCategories'
import './TopTotales.css'

function TopTotales (){
    return(
        <div className='top-totales'>
            <FichaResumenGogers />
            <FichaResumenUsuarios />
            <FichaResumenCategories />
        </div>
    )
}

export default TopTotales
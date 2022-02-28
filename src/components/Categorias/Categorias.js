import React from 'react'
import FichaCategorias from './FichaCategorias/FichaCategorias'
import './Categorias.css'

function Categorias (){
    return(
        <div>
            <div className='categorias'>
                <div className = 'title-categorias'>
                    <h2>Categorías</h2>
                </div>
                <div className = 'bloque-fichas'>
                    <FichaCategorias />
                    <FichaCategorias />
                    <FichaCategorias />
                </div>
            </div>
        </div>
    )
}

export default Categorias
import React from 'react'
import FichaCategoriasPlomeria from './FichaCategorias/FichaCategoriasPlomeria'
import FichaCategoriasElectricidad from './FichaCategorias/FichaCategoriasElectricidad'
import FichaCategoriasAseo from './FichaCategorias/FichaCategoriasAseo'
import './Categorias.css'

function Categorias (){
    return(
        <div className='categorias'>
                <div className = 'title-categorias'>
                    <h2>Categorías</h2>
                </div>
                <div className = 'bloque-fichas'>
                    <FichaCategoriasPlomeria />
                    <FichaCategoriasElectricidad />
                    <FichaCategoriasAseo />
            </div>
        </div>
    )
}

export default Categorias
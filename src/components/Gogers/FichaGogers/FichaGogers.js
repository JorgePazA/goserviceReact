import React from 'react'
import './FichaGogers.css'

function FichaGogers(props) {

    return (
        <div className = "gogers">
                <h1>Gogers</h1>
                <div className='ficha-goger'>
                    <img className='goger-image' src= {props.image} alt='Goger'/>
                    <p className='goger-feature'>{props.fullName}</p>
                </div>
        </div>
        
    )
}

export default FichaGogers;
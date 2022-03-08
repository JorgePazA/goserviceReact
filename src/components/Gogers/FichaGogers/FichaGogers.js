import React from 'react'
import './FichaGogers.css'

function FichaGogers(props) {

    return (
        <div className="gogers">
            <div className='goger-container'>
                <img className='goger-image' src={props.image} alt='Goger' />
                <p className='goger-feature'>{props.name}</p>
                <p className='goger-feature-category'>{props.category}</p>
            </div>
        </div>

    )
}

export default FichaGogers;
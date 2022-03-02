import React, {useState, useEffect} from 'react'
import './FichaResumen.css'

const apiURLGogers = 'https://goservicegr17.herokuapp.com/api/gogers'

function FichaResumenGogers() {

    const [gogers, setGogers] = useState([])

    const getGogers = async () => {
        const data = await fetch(apiURLGogers)
        const gogers = await data.json()
        setGogers(gogers)
    }

    useEffect(() => {
        getGogers()
    }, [])

    return (
        <div className = "cont-ficha-resumen">
                <p className='fr-izq'>Gogers</p>
                <p className='fr-der'>{gogers.total}</p>
        </div>
    )
}

export default FichaResumenGogers
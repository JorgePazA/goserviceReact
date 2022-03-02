import React, {useState, useEffect} from 'react'
import './FichaCategorias.css'

const apiURLGogers = 'https://goservicegr17.herokuapp.com/api/gogers'

function FichaCategoriasElectricidad() {

    const [electricistas, setElectricistas] = useState([])

    const getElectricistas = async () => {
        const data = await fetch(apiURLGogers)
        const electricistas = await data.json()
        setElectricistas(electricistas.totalCategories)
    }

    useEffect(() => {
        getElectricistas()
    }, [])

    return (
        <div className = "cont-ficha-resumen">
                <p className='fr-izq'>Electricidad</p>
                <p className='fr-der'>{electricistas.electricidad}</p>
        </div>
    )
}

export default FichaCategoriasElectricidad
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
        <div className = "cont-categories electricidad">
                <p className='category-izq'>Electricidad</p>
                <p className='category-der elec'>{electricistas.electricidad}</p>
        </div>
    )
}

export default FichaCategoriasElectricidad
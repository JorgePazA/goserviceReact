import React, {useState, useEffect} from 'react'
import './FichaCategorias.css'

const apiURLGogers = 'https://goservicegr17.herokuapp.com/api/gogers'

function FichaCategoriasPlomeria() {

    const [plomeros, setPlomeros] = useState([])

    const getPlomeros = async () => {
        const data = await fetch(apiURLGogers)
        const plomeros = await data.json()
        setPlomeros(plomeros.totalCategories)
    }

    useEffect(() => {
        getPlomeros()
    }, [])

    return (
        <div className = "cont-ficha-resumen">
                <p className='fr-izq'>Plomeria</p>
                <p className='fr-der'>{plomeros.plomeria}</p>
        </div>
    )
}

export default FichaCategoriasPlomeria
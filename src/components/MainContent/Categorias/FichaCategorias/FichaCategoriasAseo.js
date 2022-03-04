import React, {useState, useEffect} from 'react'
import './FichaCategorias.css'

const apiURLGogers = 'https://goservicegr17.herokuapp.com/api/gogers'

function FichaCategoriasAseo() {

    const [aseadores, setAseadores] = useState([])

    const getAseadores = async () => {
        const data = await fetch(apiURLGogers)
        const aseadores = await data.json()
        setAseadores(aseadores.totalCategories)
    }

    useEffect(() => {
        getAseadores()
    }, [])

    return (
        <div className = "cont-categories aseo">
                <p className='category-izq'>Aseo</p>
                <p className='category-der ase'>{aseadores.aseo}</p>
        </div>
    )
}

export default FichaCategoriasAseo
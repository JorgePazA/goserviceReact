import React, {useState, useEffect} from 'react'
import './FichaResumenProductos.css'

const apiURLProductos = 'https://goservicegr17.herokuapp.com/api/users'

function FichaResumenProductos() {

    const [users, setProducts] = useState([])

    const getUsers = async () => {
        const data = await fetch(apiURLProductos)
        const users = await data.json()
        setProducts(users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className = "cont-ficha-resumen">
                <p className='fr-izq'>Usuarios</p>
                <p className='fr-der'>{users.total}</p>
        </div>
    )
}

export default FichaResumenProductos
import React, {useState, useEffect} from 'react'
import './FichaResumen.css'

const apiURLUsers = 'https://goservicegr17.herokuapp.com/api/users'

function FichaResumenUsuarios() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const data = await fetch(apiURLUsers)
        const users = await data.json()
        setUsers(users)
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

export default FichaResumenUsuarios
import React, {useState, useEffect} from 'react'
import './TotalGogerUser.css'
import { ImUsers } from 'react-icons/im'

const apiURLUsers = 'https://goservicegr17.herokuapp.com/api/users'

function TotalUsers() {

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
        <div className = "cont-ficha-resumen users">
                <p className='icon-react'><ImUsers className='icon people' /></p>
                <p className='fr-izq'>Usuarios</p>
                <p className='fr-der total-users'>{users.total}</p>
        </div>
    )
}

export default TotalUsers
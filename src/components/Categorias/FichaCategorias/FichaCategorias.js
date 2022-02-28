import React, {useState, useEffect} from 'react'
import './FichaCategorias.css'

// const apiURLUsers = 'https://goservicegr17.herokuapp.com/api/users'

function FichaCategorias() {

    // const [users, setUsers] = useState([])

    // const getUsers = async () => {
    //     const data = await fetch(apiURLUsers)
    //     const users = await data.json()
    //     // console.log(users)
    //     setUsers(users)
    // }

    // useEffect(() => {
    //     console.log('Usando useEffect')
    //     getUsers()
    // }, [])

    return (
        <div className = "cont-ficha-resumen">
                <p className='fr-izq'>Limpieza</p>
                <p className='fr-der'>3</p>
        </div>
    )
}

export default FichaCategorias
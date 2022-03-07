import React, { useState, useEffect } from 'react'
import FichaUsers from './FichaUsers/FichaUsers'
import './TopUsers.css'

const apiURLUsers = 'https://goservicegr17.herokuapp.com/api/users';

function TopUsers() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const data = await fetch(apiURLUsers)
    const { users } = await data.json()
    setUsers(users)
    console.log(users)
  }

  useEffect(() => {
    console.log('Usando useEffect')
    getUsers()
  }, [])

  return (
    <div className='top-users'>
      <div className='users-title'>
        <h1>Usuarios</h1>
        <table class="tableUsuarios">
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>URL Detalle</th>
            </tr>
        </table>
      </div>
      <div className='ficha-user'>
        {users.map((singleUser, i) => {
          return <FichaUsers
            name={singleUser.name}
            urlDetail={singleUser.detail}
            email={singleUser.email}
            key={singleUser.id + i}
          />
        })}
      </div>
    </div>
  )
}

export default TopUsers
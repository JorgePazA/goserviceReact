import React, { useState, useEffect } from 'react';
import './LastUser.css'

const apiURLUsers = 'https://goservicegr17.herokuapp.com/api/users'

function LastUser() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const data = await fetch(apiURLUsers)
            const users = await data.json()
            setUsers(users.latest)
            // console.log(users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('Usando useEffect')
        getUsers()
    }, [])

    return (
        <div className="last-user">
            <div className='content-sup'>
                <div className='izq-content-last-user'>
                    <div className='title'>
                        <p className='lastTitle'>Último<br/>usuario<br/>creado</p>
                    </div>
                    <div className='text'>
                        <p className='text-pd'><b>Nombre<br/></b>{users.nameLast}</p>
                    </div>
                </div>
                <div className="detail">
                    <div className='img-cont'>
                        <img className='lastCreated' src={users.imageLast} alt='Last' />
                    </div>
                </div>
            </div>
            <div className='email'>                   
                <p className='text-pd-email'><b>Email:</b> {users.emailLast}</p>
            </div>
        </div>
    )
}

export default LastUser;
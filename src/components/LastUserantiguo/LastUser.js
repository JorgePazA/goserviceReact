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
        <div className="App">
            <section className="detail">
                <div className='title'>
                    <h1 className='lastTitle'>Último usuario creado</h1>
                </div>
                <div className='img-cont'>
                    <img className='lastCreated' src={users.imageLast} alt='Last' />

                    <p className='text-pd'><b>Nombre:</b> {users.nameLast}</p>
                    <p className='text-pd'><b>Email:</b> {users.emailLast}</p>
                </div>
            </section>
        </div>
    )
}

export default LastUser;
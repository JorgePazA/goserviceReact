import React from 'react';
import GoServiceImage from '../../../assets/images/goservicesolologo.png'
import './ProfileContainer.css'

function ProfileContainer () {
    return (
        <div className='profileContainer'>
            <img className="avatar" src={GoServiceImage} alt="icono" />
            <h1 className='name'>GoService</h1>
        </div>
    )
}

export default ProfileContainer

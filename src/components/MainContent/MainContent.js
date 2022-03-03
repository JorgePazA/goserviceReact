import React from 'react';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import LastUser from './LastUser/LastUser';
// import Categorias from '../Categorias/Categorias';
import './MainContent.css';

function MainContent () {
    return(
        <div>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main-content'>
                <Content />
                <LastUser />
            </div>
        </div>
    )
}

export default MainContent;
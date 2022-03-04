import React from 'react';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import LastUser from './LastUser/LastUser';
import Categorias from './Categorias/Categorias';
import LastProduct from '../LastProduct/LastProduct';
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
            <div className='content-second'>
            <div className='content-categories'>
                <Categorias />
            </div>
            <div className='content-lastProduct'>
                <LastProduct />
            </div>
            </div>
        </div>
    )
}

export default MainContent;
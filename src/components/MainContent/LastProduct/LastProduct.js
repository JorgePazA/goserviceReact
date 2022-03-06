import React, { useState, useEffect } from 'react';
import './LastProduct.css'

const apiURLGogers = 'https://goservicegr17.herokuapp.com/api/gogers'

function LastProduct() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const data = await fetch(apiURLGogers)
            const products = await data.json()
            setProducts(products.latest)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('Usando useEffect')
        getProducts()
    }, [])


    return (
        <div className="last-goger">
            <div className='content-sup-goger'>
                <div className="izq-content-last-goger">
                    <div className='title'>
                        <p className='lastTitle-goger'>Último goger creado</p>
                    </div>
                    <div className='text'>
                        <p className='text-pd-goger'><b>Nombre:</b> {products.nameLast}</p>
                    </div>
                    <div>
                        <p className='text-pd-goger'><b>Experiencia:</b> {products.experienceLast}</p>
                    </div>
                </div>
                <div className='detail'>
                    <div className='img-cont-goger'>
                        <img className='lastCreated-goger' src={products.imageLast} alt='Last' />
                    </div>
                </div>      
            </div>
                    {/* <p className='text-pd'><b>Descripcion:</b> {products.descriptionLast}</p> */}
        </div>
    )
}

export default LastProduct;
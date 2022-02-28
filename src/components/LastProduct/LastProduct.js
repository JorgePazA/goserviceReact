import React, {useState, useEffect} from 'react';
import './LastProduct.css'

const apiURLGogers = 'https://goservicegr17.herokuapp.com/api/gogers'

function LastProduct() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
        const data = await fetch(apiURLGogers)
        const products = await data.json()
        setProducts(products.latest)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('Usando useEffect')
        getProducts()
    }, [])
    

    return (
        <div className = "App">
            <section className = "detail">
                <div className='title'>
                    <h1 className='lastTitle'>Último producto creado</h1>
                </div>
                <div className='img-cont'>
                    <img className='lastCreated' src={ products.imageLast } alt='Last' />

                    <p className='text-pd'><b>Nombre:</b> {products.nameLast}</p>
                    <p className='text-pd'><b>Descripcion:</b> {products.descriptionLast}</p>
                    <p className='text-pd'><b>Experiencia:</b> {products.experienceLast}</p>
                </div>
            </section>
        </div>
    )
}

export default LastProduct;
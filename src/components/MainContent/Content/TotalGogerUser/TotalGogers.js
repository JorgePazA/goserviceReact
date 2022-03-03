import React, {useState, useEffect} from 'react'
import './TotalGogerUser.css'
import { AiFillTool } from 'react-icons/ai'

const apiURLGogers = 'https://goservicegr17.herokuapp.com/api/gogers'

function TotalGogers() {

    const [gogers, setGogers] = useState([])

    const getGogers = async () => {
        const data = await fetch(apiURLGogers)
        const gogers = await data.json()
        setGogers(gogers)
    }

    useEffect(() => {
        getGogers()
    }, [])

    return (
        <div className = "cont-ficha-resumen">
                
                <p className='icon-react'><AiFillTool className='icon key'/></p>
                <p className='fr-izq gogersTitle'>Gogers</p>
                <p className='fr-der total'>{gogers.total}</p>
        </div>
    )
}

export default TotalGogers
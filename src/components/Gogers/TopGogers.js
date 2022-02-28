import React, {useState, useEffect} from 'react'
import FichaGogers from './FichaGogers/FichaGogers'
import './TopGogers.css'

const apiURLGogers = 'https://goservicegr17.herokuapp.com/api/gogers';

function TopGogers (){
    const [gogers, setGogers] = useState([])

    const getGogers = async () => {
        const data = await fetch(apiURLGogers)
        const gogers = await data.json()
        setGogers(gogers)
    }

    useEffect(() => {
        console.log('Usando useEffect')
        getGogers()
    }, [])

    return(
        <div className='top-gogers'>
            <ul>
            <li className='ficha-goger'>
            {gogers.map((singleGoger, i) => {
              return <FichaGogers
                image={singleGoger.image}
                fullName={singleGoger.fullName}
                key={singleGoger.fullName + i}
              />
            })}
          </li>
            </ul>

        </div>
    )
}

export default TopGogers
import React, { useState, useEffect } from 'react'
import FichaGogers from './FichaGogers/FichaGogers'
import './TopGogers.css'

const apiURLGogers = 'https://goservicegr17.herokuapp.com/api/gogers';

function TopGogers() {
  const [gogers, setGogers] = useState([])

  const getGogers = async () => {
    const data = await fetch(apiURLGogers)
    const { gogers } = await data.json()
    setGogers(gogers)
    console.log(gogers)
  }

  useEffect(() => {
    console.log('Usando useEffect')
    getGogers()
  }, [])

  return (
    <div className='top-gogers'>
      <div className='gogers-title-page'>
        <h1>Gogers</h1>
      </div>
      <div className='ficha-goger'>
        {gogers.map((singleGoger, i) => {
          return <FichaGogers
            image={singleGoger.image}
            name={singleGoger.name}
            category={singleGoger.category}
            key={singleGoger.id + i}
          />
        })}
      </div>
    </div>
  )
}

export default TopGogers
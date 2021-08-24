import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Car from './Car'

const Cars = () => {

    const [cars, setCars] = useState([])

    useEffect(()=>{
        axios.get('/api/v1/cars.json')
        .then(resp => {
            setCars(resp.data)
        })
        .catch(resp => console.log(resp))
    }, [cars.length])

    const carsList = cars.map(car =>{
        return (
            <Car
                key={car.id}
                name={car.name}
                wins={car.wins}
                losses={car.losses}
                rank={car.rank}
                level={car.level}
                speed={car.speed}
                attack_power={car.attack_power}
            />
        )
    })
    return (
        <section>
            <header>This is the index page</header>
            {carsList}
        </section>
    )
}

export default Cars;

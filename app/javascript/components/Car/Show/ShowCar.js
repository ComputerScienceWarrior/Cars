import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Car from '../Index/Car'

const ShowCar = (props) => {

    const [car, setCar] = useState([])

    useEffect(()=>{
        const id = props.match.params.id
        axios.get(`/api/v1/cars/${id}`)
        .then(resp => {
            setCar(resp.data)
        })
        .catch(resp => console.log(resp))
    }, [])

    return(
        <section>
            <Car
                team_name="GTOAT"
                team_id={car.team_id}
                id={car.id}
                level={car.level}
                key={car.id}
                name={car.name}
                wins={car.wins}
                losses={car.losses}
                rank={car.rank}
                level={car.level}
                speed={car.speed}
                attack_power={car.attack_power}
    
            />
        </section>
    )
}

export default ShowCar
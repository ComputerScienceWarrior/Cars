import React from 'react'

const Car = (props) => {
    return (
        <section>
            <h2>{props.name}</h2>
            <p>{props.wins}</p>
            <p>{props.losses}</p>
            <p>{props.rank}</p>
            <p>{props.speed}</p>
            <p>{props.attack_power}</p>
        </section>
    )
}

export default Car
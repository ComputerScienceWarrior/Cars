import React from 'react'

const Car = (props) => {
    return (
        <section>
            <h2>{props.name}</h2>
            <p><b>Wins:</b>{props.wins}</p>
            <p><b>Losses:</b> {props.losses}</p>
            <p><b>Rank: </b>{props.rank}</p>
            <p><b>Speed: </b>{props.speed}</p>
            <p><b>Attack:</b> {props.attack_power}</p>
        </section>
    )
}

export default Car
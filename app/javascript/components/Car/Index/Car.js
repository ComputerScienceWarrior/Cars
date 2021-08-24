import React from 'react'
import {BrowserRouter as Browser, Link} from 'react-router-dom'

const Car = (props) => {
    return (
        <section>
            <Link to={`/cars/${props.id}`}>{props.name}</Link>
            <p><b>Wins:</b>{props.wins}</p>
            <p><b>Losses:</b> {props.losses}</p>
            <p><b>Rank: </b>{props.rank}</p>
            <p><b>Speed: </b>{props.speed}</p>
            <p><b>Attack:</b> {props.attack_power}</p>
        </section>
    )
}

export default Car
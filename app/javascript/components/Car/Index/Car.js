import React from 'react'
import {BrowserRouter as Browser, Link} from 'react-router-dom'

const Car = (props) => {
    return (
        <section>
            <h2><b>{props.name}</b> Lv.{props.level}</h2>
            <p>Team Name: <Link to={`/teams/${props.team_id}`}><b>{props.team_name}</b></Link></p>
            <p><b>Wins:</b>{props.wins}</p>
            <p><b>Losses:</b> {props.losses}</p>
            <p><b>Rank: </b>{props.rank}</p>
            <p><b>Speed: </b>{props.speed}</p>
            <p><b>Attack:</b> {props.attack_power}</p>
        </section>
    )
}

export default Car
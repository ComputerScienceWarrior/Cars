import React from 'react'

const Team = (props) => {
    return (
        <section>
            <p>Team Name{props.name}</p>
            <p>Total Team Wins: {props.total_wins}</p>
            <p>Team Trophies: {props.trophies}</p>
        </section>
    )
}

export default Team;
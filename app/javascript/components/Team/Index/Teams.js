import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Team from './Team'

const Teams = () => {

    const [teams, setTeams] = useState([])

    useEffect(()=>{
        axios.get('/api/v1/teams.json')
        .then(resp => {
            setTeams(resp.data)
        })
        .catch(resp => console.log(resp))
    }, [teams.length])

    const teamsList = teams.map(team =>{
        return (
            <Team
                key={team.id}
                name={team.name}
                total_wins={team.total_wins}
                trophies={team.trophies}
            />
        )
    })
    return (
        <section>
            <header>This is the index page for Teams</header>
            {teamsList}
        </section>
    )
}

export default Teams;
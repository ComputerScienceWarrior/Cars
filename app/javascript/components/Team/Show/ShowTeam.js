import {BrowserRouter as Router, Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Team from '../Index/Team'

const ShowTeam = (props) => {

    const [team, setTeam] = useState([])

    useEffect(() =>{
        axios.get(`/api/v1/teams/${props.match.params.id}`)
        .then(resp => {
            setTeam(resp.data)
        })
        .catch(resp => console.log(resp))
    }, [])

    return (

        <section>
            <Team 
                name={team.name}
                total_wins={team.total_wins}
                trophies={team.trophies}
            />
        </section>
    )
}

export default ShowTeam
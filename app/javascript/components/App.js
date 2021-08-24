import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cars from '../components/Car/Index/Cars'
import Car from './Car/Show/ShowCar'
import Teams from '../components/Team/Index/Teams'
import Team from '../components/Team/Show/ShowTeam'

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={Teams}/> {/*this will change to a main screen form or something similar */}
            <Route exact path="/cars/" component={Cars}/> {/* Index Route */}
            <Route exact path="/cars/:id/" component={Car}/> {/* Show Route */}
            <Route exact path="/teams/" component={Teams}/> {/* Index Route */}
            <Route exact path="/teams/:id" component={Team}/> {/* Show Route */}
        </Switch>
    )
}

export default App;
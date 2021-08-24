import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cars from '../components/Car/Cars'
import Car from './Car/Car'

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={Cars}/>
            {/* <Route exact path="/cars/:id/" component={Car}/> */}
        </Switch>
    )
}

export default App;
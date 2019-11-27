import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Info from './Components/Info/Info'
import Contact from './Components/Contact/Contact'

export default (
    <Switch>
        <Route path='/'exact component={Home}/>
        <Route path='/info' component={Info}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
)
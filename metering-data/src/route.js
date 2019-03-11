import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import {BrowseHistory,router,indexedRoute} from 'react-router';
import { Login }  from '../src/pages/loginpage';
import { Homepage }  from '../src/pages/homepage';
import {Report} from './pages/reportpage';
import {Chart} from './components/chart';
import {Stats} from './pages/statisticpage';
import {Progress} from './components/progress';
import {Nodepage} from './pages/nodepage';
import {Registration} from './components/registration';
import {Settings} from './pages/settings';
import {About} from './pages/about';
import {Header} from './components/header';

export const Routers =() => 
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/homepage' component={Homepage} />
        <Route exact path='/report' component={Report} />
        <Route exact path='/chart' component={Chart} />
        <Route exact path='/stats' component={Stats} />
        <Route exact path='/progress' component={Progress} />
        <Route exact path='/nodepage' component={Nodepage} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/about' component={About} />
        <Route exact path='/header' component={Header} />
        </Switch>
    </BrowserRouter>
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// HashRouter: #
// BrowserRouter: no #
// StaticRouter: 服务端
// MemoryRouter: RN, must have '/'

import Home from '../view/home';
import Login from '../view/login';
import P404 from '../view/error-page/p404';

function AppRouter() {
    return <BrowserRouter>
        <Switch>
            <Route exact path='/' render={()=>(<Redirect to='/home'/>)} />
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login/:value' component={Login}/>
            <Route component={P404}/>
        </Switch>
    </BrowserRouter>
}

export default AppRouter;
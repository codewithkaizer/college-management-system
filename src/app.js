'use strict';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import StudentPanel from './components/StudentPanel';
import AdminPanel from './components/AdminPanel';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/student' component={StudentPanel} />
                <Route path='/admin' component={AdminPanel} />
                <Route path='/' exact>
                    <div>Welcome to College Management System</div>
                </Route>
                <Route>
                    <div>404 Not Found</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import PostPage from './PostPage';

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts/:id" exact component={PostPage} />
        </Switch>
    )
}

export default Routes;
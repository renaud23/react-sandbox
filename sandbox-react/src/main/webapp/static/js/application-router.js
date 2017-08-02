import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Accueil from "./containers/accueil-container";
import Layout from "./components/layout";
import PageNotFound from "./components/page-not-found";

const ApplicationRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/sandbox-react/accueil' component={Accueil} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default ApplicationRouter;
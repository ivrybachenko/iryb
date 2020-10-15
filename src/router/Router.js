import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DevInProgress from "../views/dev_in_progress/DevInProgress";
import NotFound from "../views/not_found/NotFound";
import BaseLayout from "../layouts/base_layout/BaseLayout";
import FullscreenLayout from "../layouts/fullscreen_layout/FullscreenLayout";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <BaseLayout content={<DevInProgress />}/>
                </Route>
                <Route path="*">
                    <FullscreenLayout content={<NotFound />}/>
                </Route>
            </Switch>
        </Router>
    );
}

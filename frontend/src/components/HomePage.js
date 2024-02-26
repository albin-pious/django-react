import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


const HomePage = ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <p>
                        This is the HomePage...!
                    </p>
                </Route>
            </Switch>
        </Router>
    );
}

export default HomePage;
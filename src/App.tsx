import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";

function App(){
    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SignIn />
                    </Route>
                </Switch>
            </Router>
        </main>
    );
}

export default App
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Acc from './Pages/Acc';

ReactDOM.render(
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/Men"><Men /></Route>
                <Route path="/Women"><Women /></Route>
                <Route path="/Kids"><Kids /></Route>
                <Route path="/Acc"><Acc /></Route>
            </Switch>
        </BrowserRouter>
    </>
    , document.getElementById('wrap')
);

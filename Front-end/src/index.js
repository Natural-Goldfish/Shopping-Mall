import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Boys from './Pages/Boys'
import Women from './Pages/Women';
import Girls from './Pages/Girls';
import Unisex from './Pages/Unisex';

ReactDOM.render(
    <>
        <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/Men"><Men /></Route>
                <Route path="/Boys"><Boys /></Route>
                <Route path="/Women"><Women /></Route>
                <Route path="/Girls"><Girls /></Route>
                <Route path="/Unisex"><Unisex /></Route>
            </Switch>
        </BrowserRouter>
        </React.StrictMode>
    </>
    , document.getElementById('wrap')
);

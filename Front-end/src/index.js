import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home, Men, Boys, Women, Girls, Unisex, Temp, Temp2} from './Pages/index';
console.log("<------------------>");
console.log("The index component");
console.log("<------------------>")
ReactDOM.render(
    <>
        <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Men" component={Men}></Route>
                <Route path="/Boys" component={Boys}></Route>
                <Route path="/Women" component={Women}></Route>
                <Route path="/Girls" component={Girls}></Route>
                <Route path="/Unisex" component={Unisex}></Route>
            </Switch>
        </BrowserRouter>
        </React.StrictMode>
    </>
    , document.getElementById('wrap')
);

import React, { Component } from 'react';
import {render} from 'react-dom';
import Homepage from './HomePage';

const App = ()=>{
    return(
        <div>
            <Homepage />
        </div>
    );
}

const appDiv = document.getElementById("app");

render(<App />, appDiv);
import './App.css';
import 'bulma/css/bulma.min.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import MainScreen from "./MainScreen";


function App() {
    return <MainScreen actual={1} />;
}

export default App;

import './App.css';
import './Components/MovieListe/MovieListe.css'
import './Components/MovieDetails/MovieDetails.css'
import './Components/NavBar/NavBar.css'

import NavBar from "./Components/NavBar/NavBar";
import React from "react";
import {Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage";
import MovieListePage from "./Pages/MovieListePage";
import MovieDetailsPage from "./Pages/MovieDetailsPage";


function App() {
  return (
    <div className="App">
        <NavBar/>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Movie" element={<MovieListePage/>}/>
            <Route path="/Movie/:id" element={<MovieDetailsPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
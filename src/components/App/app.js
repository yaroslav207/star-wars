import React from 'react';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import {SwapiServiceProvider} from "../swapi-service-context";
import './app.css';
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../api";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import {BrowserRouter, Route} from "react-router-dom";


class App extends React.Component {

    state = {
        hasError: false,
    }

    swapiService = new SwapiService();

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }


    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <SwapiServiceProvider value={this.swapiService}>
                <BrowserRouter>
                    <div className="App">
                        <Header/>
                        <RandomPlanet/>
                        <Route path = '/people' component = {PeoplePage}/>
                        <Route path = '/planets' component = {PlanetPage}/>
                        <Route path = '/starships' component = {StarshipPage}/>
                    </div>
                </BrowserRouter>
            </SwapiServiceProvider>
        );
    }


}

export default App;


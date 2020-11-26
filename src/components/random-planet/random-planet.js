import React from 'react';
import SwapiService from '../../api/index';
import Spiner from "../spiner/spiner";
import ErrorIndicator from "../error-indicator/error-indicator"
import './random-planet.css';


class RandomPlanet extends React.Component {
    swapiSerwice = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false, error: false})
    };

    onError = () =>{
        this.setState({
            error: true,
            loading: false
        })
    };

     updateToPlanet  = () => {
        let id =  Math.floor(Math.random() * 25 + 2);

        this.swapiSerwice.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)


    };


    componentDidMount() {
        this.updateToPlanet();
        this.interval = setInterval(this.updateToPlanet, 4000);
    }
    componentWillMount() {
        clearInterval(this.interval);
    }

    render() {

        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);
        const spiner = loading? <Spiner/> : null;
        const massageError = error? <ErrorIndicator/>: null;
        const content = hasData? <PlanetView planet={planet} />: null;

        return (
            <div className="random-planet-wrapper">
                {spiner}
                {content}
                {massageError}
            </div>
        )

    }
}
const PlanetView = ({planet}) => {
    const { id, name, population, rotation, diameter} = planet;
    return(
        <React.Fragment>
            <img className="image-random-planet"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt={name}

            />
            <section className="info-random-planet">
                <h2 className="title-planet">{name}</h2>
                <ul>
                    <li>Population: {population}</li>
                    <li>Rotation: {rotation}</li>
                    <li>Diameter: {diameter}</li>
                </ul>
            </section>
        </React.Fragment>
    )
};


export default RandomPlanet;

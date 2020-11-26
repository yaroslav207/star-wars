export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    _apiImage = 'https://starwars-visualguide.com/assets/img/';
    _apiMarvel = 'http://i.annihil.us/u/prod/marvel/i/mg/d/80/52695253215f4?apikey=';
    apiPublicKey  = '1b715b564cfbcb1deb02a995058868df';
    apiPrivateKey = '8b7ea9035cd7c23518664b46adfb79712e793b2f';


    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }


    getImagePerson = (id) =>{
        return `${this._apiImage}characters/${id}.jpg`
    };
    getImagePlanet = (id) =>{
        return `${this._apiImage}planets/${id}.jpg`
    };
    getImageStarship = (id) =>{
        return `${this._apiImage}starships/${id}.jpg`
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPeople(person);
    };
    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    };
    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarships(starship);
    };

    getAllPeople = async () => {
        const res = await this.getResource('/people/');
        return res.results.map(this._transformPeople)
    };
    getAllPlanets = async () => {
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet)
    };
    getAllStarships = async () => {
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarships)
    };


    _exctractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        const id = this._exctractId(planet);
        return (
            {
                id: id,
                name: planet.name,
                population: planet.population,
                rotation: planet.rotation_period,
                diameter: planet.diameter
            }
        )
    };
    _transformPeople = (person) => {
        const id = this._exctractId(person);
        return (
            {
                id,
                name: person.name,
                gender: person.gender,
                birthYear: person.birth_year,
                eyeColor: person.eye_color,
            }
        )
    };
    _transformStarships = (starship) => {
        const id = this._exctractId(starship);
        return (
            {
                id: id,
                name: starship.name,
                length:starship.length,
                crew: starship.crew,
            }
        )
    }
}




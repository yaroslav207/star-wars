import React from "react";
import ItemDetails, {Record} from "../item-datails/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";



const PersonDetails = (itemId) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getImagePerson}) => {
                    return (
                        <ItemDetails
                            idItem={itemId}
                            getData={getPerson}
                            getImageUrl={getImagePerson}
                        >
                            <Record field='gender' label='Gender'/>
                            <Record field='birthYear' label='Birth Year'/>
                            <Record field='eyeColor' label='Eye Color'/>
                        </ItemDetails>
                    )
                }}
        </SwapiServiceConsumer>
    )

};

const PlanetDetails = (itemId) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getImagePlanet}) => {
                    return (

                        <ItemDetails
                            idItem={itemId}
                            getData={getPlanet}
                            getImageUrl={getImagePlanet}>

                            <Record field='diameter' label='Diameter'/>
                            <Record field='rotation' label='Rotation'/>
                            <Record field='population' label='Population'/>
                        </ItemDetails>
                    )
                }}
        </SwapiServiceConsumer>)

};

const StarshipDetails = (itemId) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getImageStarship}) => {
                    return (

                        <ItemDetails
                            idItem={itemId}
                            getData={getStarship}
                            getImageUrl={getImageStarship}>

                            <Record field='length' label='Length'/>
                            <Record field='crew' label='Crew'/>
                        </ItemDetails>
                    )
                }}
        </SwapiServiceConsumer>)

};


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};
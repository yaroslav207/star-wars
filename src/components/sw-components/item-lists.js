
import {withData} from "../hoc-helper/with-data"
import ItemList from "../item-list/item-list";
import SwapiService from "../../api";

const swapiService = new SwapiService();
const {
    getAllPeople, getAllPlanets, getAllStarships
} = swapiService;


const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};
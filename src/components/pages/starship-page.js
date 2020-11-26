import React from 'react';

import ErrorIndicator from "../error-indicator/error-indicator";
import Row from "../row/row";
import {StarshipList, StarshipDetails} from "../sw-components"

class StarshipPage extends React.Component {

    state = {
        selectedItem: null,
        hasError: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        })
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const starshipList = (<StarshipList onItemSelected={this.onItemSelected}/>);
        const starshipDetails = StarshipDetails(this.state.selectedItem);

        return (
            <div>
                <Row
                    left={starshipList}
                    right={starshipDetails}
                />
            </div>
        );
    }
}

export default StarshipPage;


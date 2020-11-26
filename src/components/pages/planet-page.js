import React from 'react';

import ErrorIndicator from "../error-indicator/error-indicator";
import Row from "../row/row";
import {PlanetList, PlanetDetails} from "../sw-components"

class PlanetPage extends React.Component {

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

        const planetList = (<PlanetList onItemSelected={this.onItemSelected}/>);
        const planetDetails = PlanetDetails(this.state.selectedItem);

        return (
            <div>
                <Row
                    left={planetList}
                    right={planetDetails}
                />
            </div>
        );
    }
}

export default PlanetPage;


import React from 'react';

import ErrorIndicator from "../error-indicator/error-indicator";
import Row from "../row/row";
import {PersonList, PersonDetails} from "../sw-components"

class PeoplePage extends React.Component {

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

        const personList = (<PersonList onItemSelected={this.onItemSelected}/>);
        const personDetails = PersonDetails(this.state.selectedItem);

        return (
            <div>
                <Row
                    left={personList}
                    right={personDetails}
                />
            </div>
        );
    }
}

export default PeoplePage;


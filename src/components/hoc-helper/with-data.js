import React from "react";
import Spiner from "../spiner/spiner";

const withData = (View, getData) => {
    return class extends React.Component {
        state = {
            data: null
        }

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                            data: data
                        }
                    )
                })
        }

        render() {
            const {data} = this.state;
            if (!data) {
                return <Spiner/>
            }
            return <View {...this.props} data={data}/>
        }
    }
}

export {withData} ;
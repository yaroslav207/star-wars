import React from 'react';

import './item-details.css';

import Spiner from "../spiner/spiner";




class ItemDetails extends React.Component{

    state = {
        item: null,
        loading: true,
        image: null,
    };
    componentDidMount() {
        this.updateItem();
    }

    updateItem = () => {
        this.setState({loading: true});

        const {idItem, getData, getImageUrl} = this.props;
        if(!idItem){
            return
        }
        getData(idItem)
            .then(item => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item.id)
                }
                    )
            })
    };

    componentDidUpdate(prevProps) {
        if(this.props.idItem !== prevProps.idItem){
            this.updateItem()
        }
    }


    render() {
        if(!this.state.item){
            return <span>Select a person from a list</span>;

        }
        const spiner = this.state.loading? <Spiner/>: null;
        const content = !this.state.loading?
            <RenderPersonDetails
                item = {this.state.item}
                image = {this.state.image}
            >
                {this.props.children}
            </RenderPersonDetails>
            : null;

        return (
            <div className="item-details">
                {spiner}
                {content}
            </div>
        );
    }


}

const RenderPersonDetails = (props) => {
    const {item} = props;

    return(
        <React.Fragment >
            <h2 className="name">{item.name}</h2>
            <section className="info-item">
                <img className="image-item" src={props.image}/>
                <ul>
                    {React.Children.map(props.children, (child) =>{
                        return React.cloneElement(child, {item})
                    })}
                </ul>
            </section>
        </React.Fragment>
    )
}

const Record = (props) => {
    const {item, field, label} = props;
    return (
        <li>
            <span className="term">{props.label} : </span>
            <span>{props.item[field]}</span>
        </li>
    )
};

export {
    Record
}

export default ItemDetails;

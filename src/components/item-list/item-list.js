import React from 'react';

import './item-list.css';


const ItemList = (props) => {

    const {data} = props;

    const renderItem = (arr) => {

        return (
            arr.map((item) => {
                return (
                    <li
                        key={item.id}
                        onClick={() => props.onItemSelected(item.id)}>
                        {item.name}
                    </li>
                )
            })
        )

    };


    return (
        <div className="item-list-wrapper">
            <ul className="list">
                {renderItem(data)}
            </ul>
        </div>
    );
}

export default ItemList
import React from "react";
import './css/main.scss';


const ItemsCard = (props) => {

    return (
        <div class="card-container">
            <img class="item-img"
                src={props.sprites?.default}
                alt={props.name}
            />

            <div>{props.name}</div>
            <p>{props.item.flavor_text_entries}</p>
        </div>
    )
}

export default ItemsCard;
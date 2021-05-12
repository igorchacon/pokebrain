import React from "react";
import {
  ItemImage,
  CardContainer,
  BContainer,
  NameText,
  ButtonsContainer
} from "./styled";


const ItemsCard = (props) => {

    return (
        <CardContainer>
            {console.log(props)}
            <ItemImage
                src={props.sprites?.default}
                alt={props.name}
            />

            <NameText>{props.name}</NameText>
            <p>{props.item.flavor_text_entries}</p>
        </CardContainer>
    )
}

export default ItemsCard;
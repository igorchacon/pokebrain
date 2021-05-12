import React from 'react';
import { useHistory } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton, RegionsButton, ItemsButton } from "./styled";
import { goToRegionsScreen, goToItemsScreen } from "../../routers/Conductor";


const Header = ({ leftButtonFunction, title }) => {
    const history = useHistory();

    const leftButtonTitle = () => {
        switch (title) {
          case "Pokemon List":
            return "Go to Pokedex";
          case "Pokedex":
            return "Go back to Pokemon Screen";
          case "Cities":
              return "Go back to Pokemon Screen";
          case "Items":
              return "Go back to Pokemon Screen";
          default:
            return "Back";
        }
      };

    return (
        <HeaderContainer>
            <LeftHeaderButton onClick={leftButtonFunction}>{leftButtonTitle()}</LeftHeaderButton>
            <RegionsButton onClick={() => {goToRegionsScreen(history)}}>Cities</RegionsButton>
            <ItemsButton onClick={() => {goToItemsScreen(history)}}>Items</ItemsButton>
            <h1>{title}</h1>
            <RightHeaderButton onClick={() => history.goBack()}>Back</RightHeaderButton>
        </HeaderContainer>
    )
}

export default Header;
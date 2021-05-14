import React from 'react';
import './css/main.scss';
import { useHistory } from "react-router-dom";
import { goToRegionsScreen, goToItemsScreen } from "../../routers/Conductor";


const Header = ({ leftButtonFunction, title }) => {
    const history = useHistory();

    const leftButtonTitle = () => {
        switch (title) {
          case "Pokemon List":
            return "Pokedex";
          case "Pokedex":
            return "Home";
          case "Cities":
              return "Home";
          case "Items":
              return "Home";
          default:
            return "Back";
        }
      };

    return (
        <div class="header-container">
          <div class="buttons-container">
            <button onClick={leftButtonFunction}>{leftButtonTitle()}</button>
            <button onClick={() => {goToRegionsScreen(history)}}>Cities</button>
            <button onClick={() => {goToItemsScreen(history)}}>Items</button>
          </div>
          
          <h1 class="header-title"> <div class="growth-effect">PokeBrain</div> </h1>

          <div></div>
        </div>
    )
}

export default Header;
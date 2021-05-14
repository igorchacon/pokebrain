import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from '../../global/GlobalStateContext.js'
import './css/main.scss';
import { PokeListContainer } from './styled';
import PokeCard from "../../components/PokeCard/PokeCard";
import Header from '../../components/Header/Header';
import { gotToPokedexUserScreen } from '../../routers/Conductor';

const HomeScreen = () => {

    const { pokemons } = useContext(GlobalStateContext);
    const history = useHistory();

    return (
        <>
            <Header 
                title={"Pokemon List"}
                leftButtonFunction={() => {gotToPokedexUserScreen(history)}}
            />

            <h1>Try to add a pokemon to your Pokedex!</h1>

            <div class="pokeListContainer">
                {pokemons && pokemons.map((pokemon) => {
                    return (
                        <div>
                            {<PokeCard 
                                name={pokemon.name}
                                key={pokemon.name}
                                poke={pokemon}
                            />}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default HomeScreen;
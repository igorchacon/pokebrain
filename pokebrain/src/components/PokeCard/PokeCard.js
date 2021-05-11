import React, { useContext } from "react";
import {
  PokemonImage,
  CardContainer,
  PriceContainer,
  NameText,
  ButtonsContainer
} from "./styled";
import GlobalStateContext from '../../global/GlobalStateContext'
import { useHistory } from "react-router-dom";
import { goToDetailsScreen } from "../../routers/Conductor";


const PokeCard = (props) => {
    
    const history = useHistory();

    // traz do global state o obj data
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
        GlobalStateContext
    );

    // função para adicionar o pokemon na pokedex
    const AddToPokedex = () => {
        const pokeIndex = pokemons.findIndex(
            (item) => item.name === props.poke.name
        );

        const newPokeList = [...pokemons];

        newPokeList.splice(pokeIndex, 1);

        const orderedPokemons = newPokeList.sort((a, b) => {
            return a.id = b.id;
        });

        const newPokedexList = [...pokedex, props.poke];

        const orderedPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id;
        });

        setPokedex(orderedPokedex);
        setPokemons(orderedPokemons);
    };

    return (
        <CardContainer>
            <PokemonImage
                src={props.poke && props.poke.sprites.front_default}
                alt={props.poke.name}
            />

            <NameText>{props.name}</NameText>
            
            <PriceContainer>
                <ButtonsContainer>
                    <button onClick={AddToPokedex}>Add Pokemon to your Pokedex</button>
                    <button onClick={() => {goToDetailsScreen(history, props.poke.name)}}>
                        Show Pokemon Details
                    </button>
                </ButtonsContainer>
            </PriceContainer>
        </CardContainer>
    )
}

export default PokeCard;
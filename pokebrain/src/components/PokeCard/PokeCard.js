import React, { useContext } from "react";
import "./css/main.scss"
import GlobalStateContext from '../../global/GlobalStateContext'
import { useHistory } from "react-router-dom";


const PokeCard = (props) => {
    
    const history = useHistory();

    // traz do global state o obj data
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
        GlobalStateContext
    );

    // função para adicionar o pokemon na pokedex
    const addToPokedex = () => {
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

    // função para retirar o pokemon na pokedex
    const removeFromPokedex = () => {
        const pokeIndex = pokedex.findIndex(
          (item) => item.name === props.poke.name
        );

        const newPokedexList = [...pokedex];
        newPokedexList.splice(pokeIndex, 1);
        const orderedPokedex = newPokedexList.sort((a, b) => {
        return a.id - b.id;
        });

        const newPokemonsList = [...pokemons, props.poke];
        const orderedPokemons = newPokemonsList.sort((a, b) => {
        return a.id - b.id;
        });

        setPokedex(orderedPokedex);
        setPokemons(orderedPokemons);
    };

    return (
        <div class="card-container">
            <img class="pokemon-img"
                src={props.poke && props.poke.sprites.front_default}
                alt={props.poke.name}
            />

            <div class="nameText">{props.name}</div>
            
         
            <div>
                <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex }>
                    {props.isPokedex ? "Remove from Pokedex" : "Add to Pokedex"}
                </button>
            </div>
        
        </div>
    )
}

export default PokeCard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    const [pokemonNames, setPokemonNames] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);


    useEffect(() => {
        getPokemonNames();
    }, []);

    

    useEffect(() => {
        const newList = [];

        pokemonNames.forEach((item) => {
            // pegar na api a lista de pokemons
            axios
                .get(item.url)
                .then((response) => {
                
                    newList.push(response.data);
                    
                    // ordenar os pokemons em ordem alfabeticamente por nome
                    if (newList.length === 150) {
                        const orderedList = newList.sort((a, b) => {
                            return a.id - b.id;
                        });
                        setPokemons(orderedList);
                    }
                })
                .catch((error) => console.error(error))
        });
    }, [pokemonNames]);

    const getPokemonNames = () => {
        axios
            .get(`${BASE_URL}/pokemon/?limit=150`)
            .then((response) => {
                setPokemonNames(response.data.results);
            })
            .catch((error) => console.error(error))
    };

    const data = {
        pokemons,
        setPokemons,
        pokedex,
        setPokedex
    };

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;
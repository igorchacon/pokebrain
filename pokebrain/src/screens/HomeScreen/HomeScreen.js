import React, { useContext } from "react";
import GlobalStateContext from '../../global/GlobalStateContext.js'
import { PokeListContainer } from './styled';
import PokeCard from "../../components/PokeCard/PokeCard";
import Header from '../../components/Header/Header'

const HomeScreen = () => {

    const { pokemons } = useContext(GlobalStateContext);

    return (
        <>
            <Header />

            <PokeListContainer>
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
            </PokeListContainer>
        </>
    )
}

export default HomeScreen;
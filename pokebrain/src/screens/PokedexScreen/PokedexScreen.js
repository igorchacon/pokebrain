import React, { useContext }  from "react";
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/Header';
import PokeCard from "../../components/PokeCard/PokeCard";
import GlobalStateContext from '../../global/GlobalStateContext';
import { PokeListContainer } from './styled';
import { goToHomeScreen } from '../../routers/Conductor'

const PokedexScreen = () => {
    const history = useHistory();
    const { pokedex } = useContext(GlobalStateContext);

    return (
        <>
            <Header 
                title={"Pokedex"}
                leftButtonFunction={() => {goToHomeScreen(history)}}
            />
            <PokeListContainer>
                {pokedex && 
                    pokedex.map((poke) => {
                        return <PokeCard isPokedex key={poke.name} poke={poke} />
                    })
                }
            </PokeListContainer>
        </>
    )
};

export default PokedexScreen;
import React from 'react';
import { useHistory } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./styled";
import {gotToPokedexUserScreen} from '../../routers/Conductor'

const Header = () => {
    const history = useHistory();

    return (
        <HeaderContainer>
            <LeftHeaderButton onClick={() => gotToPokedexUserScreen(history)}>Ir para Pokedex</LeftHeaderButton>
            <h1>Lista de Pokemons</h1>
            <RightHeaderButton onClick={() => history.goBack()}>Voltar</RightHeaderButton>
        </HeaderContainer>
    )
}

export default Header;
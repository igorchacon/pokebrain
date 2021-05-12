import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/Header';
import { goToHomeScreen } from '../../routers/Conductor';
import useRequest from '../../hooks/useRequest';

const RegionsScreen = () => {

    const history = useHistory();

    const regions = useRequest("https://pokeapi.co/api/v2/location/", [])

    return (
        
        <>
            <Header 
                title={"Cities"}
                leftButtonFunction={() => {goToHomeScreen(history)}}
            />
            <h1>List of Pokemon cities!</h1>
            <div>
                {regions[0].results?.map((region) => {
                    return <table> <tr><th>City name:</th> <td>{region.name.replace("-", " ")}</td></tr>  </table>
                })}
            </div>
        </>
    );
};

export default RegionsScreen;
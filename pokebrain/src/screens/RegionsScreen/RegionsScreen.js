import React from "react";
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/Header';
import { goToHomeScreen } from '../../routers/Conductor';
import useRequest from '../../hooks/useRequest';
import { BASE_URL } from '../../constants/urls.js';


const RegionsScreen = () => {

    const history = useHistory();

    const regions = useRequest(`${BASE_URL}/location/?=100`, []);

    return (
        
        <>
            <Header 
                title={"Cities"}
                leftButtonFunction={() => {goToHomeScreen(history)}}
            />
            <h1>List of Pokemon cities!</h1>
            <div>
                {regions[0].results?.map((region) => {
                    return <h3> {region.name.replace("-", " ")} </h3>
                })}
            </div>
        </>
    );
};

export default RegionsScreen;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/Header';
import { goToHomeScreen } from '../../routers/Conductor';
import useRequest from '../../hooks/useRequest';
import { BASE_URL } from '../../constants/urls.js';
import ItemsCard from "../../components/ItemsCard/ItemsCard";
import { ItemsContainer } from "./styled";


const ItemsScreen = () => {

    const history = useHistory();
    const [itemNames, setItemsNames] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItemsNames();
    }, []);

    useEffect(() => {
        const newList = [];

        itemNames.forEach((item) => {
            // pegar na api a lista de itens
            axios
                .get(item.url)
                .then((response) => {
                
                    newList.push(response.data);
                    
                    // ordenar os itens em ordem alfabeticamente por nome
                    if (newList.length === 150) {
                        const orderedList = newList.sort((a, b) => {
                            return a.id - b.id;
                        });
                        setItems(orderedList);
                    }
                })
                .catch((error) => console.error(error))
        });
    }, [itemNames]);

    // const items = useRequest(`${BASE_URL}/item/?=150`, []);

    const getItemsNames = () => {
        axios
            .get(`${BASE_URL}/item/?limit=150`)
            .then((response) => {
                setItemsNames(response.data.results);
            })
            .catch((error) => console.error(error))
    };

    

    return (
        
        <>
            <Header 
                title={"Items"}
                leftButtonFunction={() => {goToHomeScreen(history)}}
            />
            <h1>List of Pokemon items!</h1>
            <>    
                {items?.map((item) => {
                    return (
                        <div>
                            <img src={item.sprites.default}></img>
                            <br/>
                            {item.name}
                            <br/>
                            {item.flavor_text_entries[1].text}
                            <br/>
                        </div>
                    )
                })}
            </>
        </>
    );
};

export default ItemsScreen;
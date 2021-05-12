export const goToHomeScreen = (history) => {
    history.push("/");
}

export const gotToPokedexUserScreen = (history) => {
    history.push("/pokedex");
}

export const goToDetailsScreen = (history, name) => {
    history.push(`/detalhes/${name}`);
}

export const goToRegionsScreen = (history) => {
    history.push("/regions")
}

export const goBack = (history) => {
    history.goBack();
}
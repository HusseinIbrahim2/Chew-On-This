import { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";

import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/data";

function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(
        (meal) => favoriteMealsCtx.ids.includes(meal.id)
    )

    if (favoriteMeals.length == 0) {
        return (
            <View style={styles.container} >
                <Text style={styles.text} >You have no favorite Meals !</Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals} />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:0.8,
        justifyContent:'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default FavoritesScreen;
import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { MEALS, CATEGORIES } from "../data/data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {

        const catTitle = CATEGORIES.find((category) => category.id == catId).title;
        navigation.setOptions({
            title: catTitle
        })

    }, [catId, navigation])

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUri: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        function pressHandler() {
            navigation.navigate('MealRecipe' , {recipeId : itemData.item.id} )
        }

        return (
            <MealItem {...mealItemProps} onPress={pressHandler} />
        )
    }

    return (
        <View style={styles.container} >
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});
export default MealsOverviewScreen;
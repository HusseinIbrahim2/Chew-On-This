import { View, FlatList } from "react-native";

import { MEALS } from "../data/data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData) {
        return (
            <MealItem title={itemData.item.title} />
        )
    }

    return (
        <View>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )
}
export default MealsOverviewScreen;
import { FlatList, StyleSheet } from "react-native";


import { CATEGORIES } from "../data/data";
import CategoryListe from "../components/CategoryListe";

function CategoriesScreen({ navigation }) {
    function LogCategoriesItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview')
        }
        return (
            <CategoryListe title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
        )
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={LogCategoriesItem}
            numColumns={2}
        />
    )
}


export default CategoriesScreen;
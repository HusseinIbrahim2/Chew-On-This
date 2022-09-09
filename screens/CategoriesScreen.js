import { FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/data";
import CategoryListe from "../components/CategoryListe";

function LogCategoriesItem(itemData) {
    return (
        <CategoryListe title={itemData.item.title} color={itemData.item.color} />
    )
}

function CategoriesScreen() {
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
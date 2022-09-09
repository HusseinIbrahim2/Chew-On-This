import { FlatList } from "react-native";

import { CATEGORIES } from "../data/data";
import CategoryListe from "../components/CategoryListe";

function LogCategoriesItem(itemData) {
    return (
        <CategoryListe title={itemData.item.title} />
    )
}

function CategoriesScreen() {
    return  (
            <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={LogCategoriesItem} />
        )
    }

export default CategoriesScreen;
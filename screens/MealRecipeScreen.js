import { View, FlatList, Text, Image, StyleSheet } from "react-native";

import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/data";

function MealRecipeScreen({ route }) {
    const recId = route.params.recipeId;

    const selectedRecipe = MEALS.find((meal) => meal.id === recId);


    /* function renderMealRecipe(itemData) {
         const item = itemData.item;
         const mealRecipeProps = {
             title: item.title,
             imageUri: item.imageUrl,
             affordability: item.affordability,
             complexity: item.complexity,
             duration: item.duration,
             ingredients: item.ingredients,
             steps: item.steps,
             isGlutenFree: item.isGlutenFree,
             isVegan: item.isVegan,
             isVegetarian: item.isVegetarian,
             isLactoseFree: item.isLactoseFree,
         }
     }*/

    return (
        /*  <View>
              <FlatList
                  data={selectedRecipe}
                  keyExtractor={(item) => item.id}
                  renderItem={renderMealRecipe}
              />
          </View> */
        <View>
            <View style={{alignItems:'center'}}>
                <Image style={styles.image}
                    source={{ uri: selectedRecipe.imageUrl }}
                />
            </View>
            <Text>{selectedRecipe.title}</Text>
            <MealDetail
                affordability={selectedRecipe.affordability}
                duration={selectedRecipe.duration}
                complexity={selectedRecipe.complexity} />
            <View>
                {selectedRecipe.steps.map((step) => (<Text key={step} style={{ textAlign: 'center' }} >{step}</Text>))}
            </View>
            <View>
                {selectedRecipe.ingredients.map((ingredient) => (<Text key={ingredient} >{ingredient}</Text>))}
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    image: {
        width: '90%',
        height: 200,
    },
})

export default MealRecipeScreen;
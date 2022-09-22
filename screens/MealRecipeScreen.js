import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect, useContext } from "react";

import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/data";
import Liste from "../components/Details/Liste";
import SubTitle from "../components/Details/SubTitle";
import IconButton from "../components/IconButton ";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorites, addFavorites } from "../store/redux/favorites";
//import { FavoritesContext } from "../store/context/favorites-context";

function MealRecipeScreen({ route, navigation }) {

    //const favoriteMealCtx = useContext(FavoritesContext);
    const dispatch = useDispatch();
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const mealId = route.params.recipeId;

    const selectedRecipe = MEALS.find((meal) => meal.id === mealId);

    //const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function favoriteMealChangeHandler() {
        if (mealIsFavorite) {
            // favoriteMealCtx.removeFavorite(mealId);
            dispatch(removeFavorites({id: mealId}));
        }
        else {
            // favoriteMealCtx.addFavorite(mealId);
            dispatch(addFavorites({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (<IconButton
                    name={mealIsFavorite ? 'star' : 'staro'}
                    size={30}
                    color='white'
                    onPress={favoriteMealChangeHandler} />
                );
            },
        }
        );
    }, [navigation, favoriteMealChangeHandler]);

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

        <ScrollView style={styles.root}>
            <Image style={styles.image}
                source={{ uri: selectedRecipe.imageUrl }}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{selectedRecipe.title}</Text>
            </View>

            <MealDetail
                affordability={selectedRecipe.affordability}
                duration={selectedRecipe.duration}
                complexity={selectedRecipe.complexity}
                textStyle={styles.text}
            />
            <SubTitle>Ingredients</SubTitle>
            <Liste dataPoint={selectedRecipe.ingredients} />
            <SubTitle>Steps</SubTitle>
            <Liste dataPoint={selectedRecipe.steps} />
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    root: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 250,
    },
    text: {
        fontSize: 15,
        color: 'white'

    },
    titleContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
    },
})

export default MealRecipeScreen;
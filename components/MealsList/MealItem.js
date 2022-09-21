import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetail from "../MealDetail";

function MealItem({ id, title, imageUri, affordability, complexity, duration }) {

    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('MealRecipe' , {recipeId : id })
    }

    return (
        <View style={styles.container} >
            <Pressable android_ripple={{ color: 'grey' }} onPress={pressHandler} >
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: imageUri }} />
                    <Text style={styles.title} >{title}</Text>
                </View>
                <MealDetail affordability={affordability} complexity={complexity} duration={duration} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    container: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginBottom: 20,
        margin: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 4,
    },
});


export default MealItem;
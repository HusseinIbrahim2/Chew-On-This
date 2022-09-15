import { View, Text, StyleSheet } from "react-native";

function MealDetail({ affordability, complexity, duration }) {
    return (
        <View style={styles.details}>
            <Text style={styles.mealDetail}>{duration}</Text>
            <Text style={styles.mealDetail}>{complexity.toUpperCase()}</Text>
            <Text style={styles.mealDetail}>{affordability.toUpperCase()}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
    },
    mealDetail:{
        marginHorizontal:4,
    },
});

export default MealDetail;
import { View, Text, StyleSheet } from "react-native";

function MealDetail({ affordability, complexity, duration, textStyle }) {
    return (
        <View style={styles.details}>
            <Text style={[styles.mealDetail, textStyle]}>{duration}</Text>
            <Text style={[styles.mealDetail, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.mealDetail, textStyle]}>{affordability.toUpperCase()}</Text>
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
    mealDetail: {
        marginHorizontal: 4,
    },
});

export default MealDetail;
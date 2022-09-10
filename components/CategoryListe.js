import { View, Pressable, Text, StyleSheet } from "react-native";

function CategoryListe({ title, color }) {
    return (
        <View style={[style.griditem, { backgroundColor: color }]}>
            <Pressable android_ripple={{ color: '#ccc', borderless: true }} style={style.button}>
                <View style={style.innerContainer}>
                    <Text style={style.title}> {title} </Text>
                </View>
            </Pressable>
        </View>
    )
}
const style = StyleSheet.create({
    griditem: {
        borderRadius: 10,
        borderColor: '#000',
        margin: 16,
        flex: 1,
        elevation: 4,
        height: 150,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    button: {
        flex: 1,
    },

    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default CategoryListe;
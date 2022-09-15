import { View, StyleSheet, Text } from 'react-native';

function SubTitle({ children }) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleTexte}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    titleContainer: {
        alignItems:'center',
        borderBottomWidth:2,
        marginHorizontal:20,
        marginVertical:5,
    },
    titleTexte:{
        fontSize: 18,
        fontWeight:'bold',
        color:'white',
        paddingVertical:5,
    }
})

export default SubTitle;
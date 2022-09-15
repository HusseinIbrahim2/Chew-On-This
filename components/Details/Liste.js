import { View, StyleSheet, Text } from 'react-native';

function Liste({ dataPoint }) {
    return (
        dataPoint.map((data) => (
            <View key={data} style={styles.listeContainer} >
                <Text style={styles.listeContent} >{data}</Text>
            </View>
        ))
    )
}
const styles = StyleSheet.create({
    listeContainer: {
        borderRadius: 6,
        backgroundColor: 'lightgrey',
        paddingVertical: 5,
        paddingHorizontal: 8,
        marginHorizontal: 20,
        marginVertical: 4,
        alignItems: 'center',
    },
    listeContent: {
        fontSize:16,
        color:'#4d2007',
        textAlign:'center',
    }
})


export default Liste;
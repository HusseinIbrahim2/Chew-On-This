import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItem({ title, imageUri, affordability, complexity, duration , onPress}) {
    return (
        <View style={styles.container} >
            <Pressable android_ripple={{color:'grey'}}  onPress={onPress} >
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: imageUri }} />
                    <Text style={styles.title} >{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.mealDetail}>{duration}</Text>
                    <Text style={styles.mealDetail}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.mealDetail}>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 22 ,
        textAlign: 'center',
        margin:10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    container:{
        borderRadius:10,
        overflow:'hidden',
        backgroundColor:'white',
        marginBottom:20,
        margin:10,
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset : { width:0 , height: 2},
        shadowRadius: 8,
        elevation:4,
    },
    mealDetail:{
        marginHorizontal:4,
    },
    details:{
        flexDirection:'row',
        justifyContent: 'center' ,
        padding:10,
        alignItems:'center',
    }
});


export default MealItem;
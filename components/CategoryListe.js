import { View, Pressable, Text } from "react-native";

function CategoryListe({ title, color }) {
    return (
        <View>
            <Pressable>
                <View>
                    <Text> {title} </Text>
                </View>

            </Pressable>
        </View>
    )
}

export default CategoryListe;
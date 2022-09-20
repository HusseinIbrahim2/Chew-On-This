import { StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function IconButton({ onPress, name, color ,size }) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed} >
            <AntDesign name={name} color={color} size={size} />
        </Pressable>
    )
}

const styles= StyleSheet.create({
    pressed:{
        opacity:0.7,
    }
})

export default IconButton;
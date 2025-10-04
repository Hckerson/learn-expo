import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

interface Props {
    onPress: () => void;
}

export default function CircleButton({ onPress }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.container} onPress={onPress}>
                <MaterialIcons name="add" size={38} color={"#25292e"} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        width: 84,
        height: 84,
        borderWidth: 4,
        borderColor: "#ffd33d",
        borderRadius: 42,
        marginLeft:24,
        marginRight:24,
        padding: 3,
    },
});

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}

export default function IconButton({ icon, label, onPress }: Props) {
    return (
        <View>
            <Pressable style={styles.container} onPress={onPress}>
                <MaterialIcons name={icon} size={24} color={"#fff"} />
                <Text style={styles.labelContainer}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    labelContainer: {
        color: "#fff",
        marginTop: 12,
    },
});

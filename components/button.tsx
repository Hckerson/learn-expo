import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
    label: string;
    theme?: "primary" | "";
}

export default function Button({ label }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        marginHorizontal: 20,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

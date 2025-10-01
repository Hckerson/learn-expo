import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>G.O.A.T</Text>
            <Link href={"/about"} style={styles.button}>
                Go to about screen
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e5e5e5",         
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#0a0a0a",       
    },
    button: {
        padding: 5,
        fontSize:20,
        textDecorationLine:'underline',
        color:'#0a0a0a'
    },
});

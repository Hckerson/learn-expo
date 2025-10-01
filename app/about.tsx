import { StyleSheet, Text, View } from "react-native";

export default function About() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>About screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
        alignItems:"center",    
        backgroundColor:'#525252'
	},
	text: {
        color:"#57534e"
    }
});

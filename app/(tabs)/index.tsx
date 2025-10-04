import Button from "@/components/button";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@/components/imageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            quality: 1,
        });

        if(!result.canceled){
            console.log(result)
        }
        alert('You did not select any image')
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imageSource={PlaceholderImage} />
            </View>
            <View style={styles.buttonContainer}>
                <Button label="Choose a photo" theme="primary" />
                <Button label="Use this photo" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 28,
    },
    buttonContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
});

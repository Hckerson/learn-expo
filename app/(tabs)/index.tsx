import { useState } from "react";
import Button from "@/components/button";
import { StyleSheet, View } from "react-native";
import IconButton from "@/components/iconButton";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "@/components/imageViewer";
import CircleButton from "@/components/circleButton";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(
        undefined
    );
    const [showAppOption, setShowAppOptions] = useState<boolean>(false);

    const pickImageAsync = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const [data] = result.assets;
            const { uri } = data;
            setSelectedImage(uri);
            setShowAppOptions(true);
        } else {
            alert("You did not select any image");
        }
    };


    const onAddSticker = ()=>{

    }
    
    const onReset = ()=>{
        setShowAppOptions(false)
    }
    
    const onSaveImageAsync = ()=>{

    }


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer
                    imageSource={PlaceholderImage}
                    selectedImage={selectedImage}
                />
            </View>
            {showAppOption ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton label="Reset" onPress={onReset} icon="refresh"/>
                        <CircleButton onPress={onAddSticker}/>
                        <IconButton label="Save" onPress={onReset} icon="save-alt"/>

                    </View>
                </View>
            ) : (
                <View style={styles.buttonContainer}>
                    <Button
                        label="Choose a photo"
                        theme="primary"
                        onPress={pickImageAsync}
                    />
                    <Button
                        label="Use this photo"
                        onPress={() => setShowAppOptions(true)}
                    />
                </View>
            )}
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
    optionsContainer: {
        position: "absolute",
        bottom: 80,
    },
    optionsRow: {
        flexDirection: "row",
        alignItems: "center",
    },
});

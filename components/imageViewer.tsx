import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

export default function ImageViewer({
    imageSource,
    selectedImage
}: {
    imageSource: ImageSourcePropType;
    selectedImage?: string
}) {
    const sourceUrl = selectedImage ? {uri: selectedImage}: imageSource
    return (
        <Image source={sourceUrl} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});

import Button from "@/components/button";
import CircleButton from "@/components/circleButton";
import Emojipicker from "@/components/emoji-picker";
import EmojiSticker from "@/components/emoji-sticker";
import EmojiList from "@/components/emojiList";
import IconButton from "@/components/iconButton";
import ImageViewer from "@/components/imageViewer";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(
        undefined
    );
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showAppOption, setShowAppOptions] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<
        ImageSourcePropType | undefined
    >(undefined);

    const [permissionResponse, requestPermission] =
        MediaLibrary.usePermissions();

    const imageRef = useRef<View | null>(null);
    useEffect(() => {
        if (!permissionResponse?.granted) {
            requestPermission();
        }
    });

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

    const onAddSticker = () => {
        setShowModal(true);
    };

    const onReset = () => {
        setShowAppOptions(false);
    };

    const onModalClose = () => {
        setShowModal(false);
    };

    const onSaveImageAsync = async () => {
        try {
            const loclUri = await captureRef(imageRef, {
                height: 440,
                quality: 1,
            });

            await MediaLibrary.saveToLibraryAsync(loclUri);
            if (loclUri) {
                alert("Saved!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.imageContainer}>
                <View ref={imageRef} collapsable={false}>
                    <ImageViewer
                        imageSource={PlaceholderImage}
                        selectedImage={selectedImage}
                    />
                    {pickedEmoji && (
                        <EmojiSticker stickerSrc={pickedEmoji} imageSize={40} />
                    )}
                </View>
            </View>
            {showAppOption ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton
                            label="Reset"
                            onPress={onReset}
                            icon="refresh"
                        />
                        <CircleButton onPress={onAddSticker} />
                        <IconButton
                            label="Save"
                            onPress={onSaveImageAsync}
                            icon="save-alt"
                        />
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
            <Emojipicker onPress={onModalClose} isVisible={showModal}>
                <EmojiList
                    onSelect={setPickedEmoji}
                    onCloseModal={onModalClose}
                />
            </Emojipicker>
        </GestureHandlerRootView>
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

import { Image } from "expo-image";
import { useState } from "react";
import {
    FlatList,
    ImageSourcePropType,
    Platform,
    Pressable,
    StyleSheet,
} from "react-native";

interface ListProps {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
}

export default function EmojiList({ onSelect, onCloseModal }: ListProps) {
    const [emojis] = useState<ImageSourcePropType[]>([
        require("../assets/images/emoji1.png"),
        require("../assets/images/emoji2.png"),
        require("../assets/images/emoji3.png"),
        require("../assets/images/emoji4.png"),
        require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS == "web"}
            data={emojis}
            contentContainerStyle={styles.container}
            renderItem={({ item, index }) => (
                <Pressable
                    onPress={() => {
                        console.log(item)
                        onSelect(item);
                        onCloseModal();
                    }}
                >
                    <Image
                        style={styles.imageContainer}
                        key={index}
                        source={item}
                    />
                </Pressable>
            )}
        ></FlatList>
    );
}

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    imageContainer: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});

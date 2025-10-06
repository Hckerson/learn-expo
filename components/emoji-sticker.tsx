import { Image, ImageSourcePropType, View } from "react-native";

interface StickerProps {
    stickerSrc: ImageSourcePropType;
    imageSize: number;
}

export default function EmojiSticker({ imageSize, stickerSrc }: StickerProps) {
    return (
        <View style={{ top: -   300 }}>
            <Image
                source={stickerSrc}
                style={{ width: imageSize, height: imageSize }}
            />
        </View>
    );
}

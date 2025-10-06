import { ImageSourcePropType, View } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";

interface StickerProps {
    stickerSrc: ImageSourcePropType;
    imageSize: number;
}

export default function EmojiSticker({ imageSize, stickerSrc }: StickerProps) {
    const scaleImage = useSharedValue(imageSize);
    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value *= 2;
            } else {
                scaleImage.value = Math.round(scaleImage.value / 2);
            }
        });
    return (
        <View style={{ top: -300 }}>
            <Animated.Image
                source={stickerSrc}
                resizeMode={"contain"}
                style={{ width: imageSize, height: imageSize }}
            />
        </View>
    );
}

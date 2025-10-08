import { ImageSourcePropType } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

interface StickerProps {
    stickerSrc: ImageSourcePropType;
    imageSize: number;
}

export default function EmojiSticker({ imageSize, stickerSrc }: StickerProps) {
    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value *= 2;
            } else {
                scaleImage.value = Math.round(scaleImage.value / 2);
            }
        });

    const drag = Gesture.Pan().onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    const dragSyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });
    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[dragSyles, { top: -300 }]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSrc}
                        resizeMode={"contain"}
                        style={[
                            { width: imageSize, height: imageSize },
                            imageStyle,
                        ]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}

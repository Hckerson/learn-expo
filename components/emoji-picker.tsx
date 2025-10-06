import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface EmojiProps {
    isVisible: boolean;
    onPress: () => void;
    children: React.ReactNode;
}

export default function EmojiPicker({ isVisible, onPress, children }: EmojiProps) {
    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={isVisible}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Choose a sticker</Text>
                        <Pressable onPress={onPress}>
                            <MaterialIcons
                                name="close"
                                color={"#ff"}
                                size={22}
                            />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "25%",
        width: "100%",
        backgroundColor: "#25292e",
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        position: "absolute",
        bottom: 0,
    },
    titleContainer: {
        height: "16%",
        backgroundColor: "#464C55",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: "#fff",
        fontSize: 16,
    },
});

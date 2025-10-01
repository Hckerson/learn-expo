import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
                headerStyle: {
                    backgroundColor: "#25292e",
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                tabBarStyle: {
                    backgroundColor: "#25292e",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons
                            color={color}
                            size={24}
                            name={focused ? "home-sharp" : "home-outline"}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons
                            color={color}
                            size={24}
                            name={
                                focused
                                    ? "information-circle"
                                    : "information-circle-outline"
                            }
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

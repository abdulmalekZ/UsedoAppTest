import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
} from "react-native";
import Home from "../components/Home";
import MainNavigator from "./Main";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

// @refresh reset
const Header: React.FC<{ backButton?: boolean; screenName: string }> = ({
    backButton,
    screenName,
}) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <View style={styles.headerButton}>
                    {backButton && (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={{flexDirection: 'row'}}>
                                <Text><Ionicons name={"chevron-back"} size={22} /></Text>
                                <Text style={{ fontSize: 18 }}>Back</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
                <Text
                    numberOfLines={2}
                    minimumFontScale={0.6}
                    style={[{ flex: 1 }, styles.smallTitle]}
                >
                    {screenName}
                </Text>
                <View style={styles.headerButton}></View>
            </View>
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: Platform.OS == "ios" ? 44 : 56,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomWidth: 0.5,
        borderBottomColor:
            Platform.OS == "ios"
                ? "rgba(60, 60, 67, 0.29)"
                : "rgb(216, 216, 216)",
    },
    smallTitle: {
        fontWeight: Platform.OS == "ios" ? "600" : "normal",
        fontSize: Platform.OS == "ios" ? 17 : 20,
        lineHeight: Platform.OS == "ios" ? 22 : 20,
        textAlign: "center",
        color: "#000",
    },
    headerButton: {
        width: 80,
    },
    backIcon: {
        marginLeft: Platform.OS == "ios" ? 4 : 16,
        width: 17,
        height: 17,
    },
    backTitle: {
        marginLeft: 2,
        fontWeight: "400",
        fontSize: Platform.OS == "ios" ? 17 : 20,
        lineHeight: Platform.OS == "ios" ? 22 : null,
        letterSpacing: Platform.OS == "ios" ? -0.41 : null,
    },
});

import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-view";
import {
    StyleSheet, TextInput, View, Text, Button, Alert
} from "react-native";
import { Dashboard } from "./Dashboard";

export const Login = ({ navigation }) => {
    const [userName, setUserName] = useState(null);
    const [passWord, setPassWord] = useState(null);

    console.log(userName);
    return (
        // <SafeAreaView>
        <View style={{ flex: 1 }}>
            <TextInput
                style={styles.input}
                onChangeText={(value) => {
                    setUserName(value)
                }}
                // value={text}
                placeholder="Username"
                keyboardType="default"

            />
            <TextInput
                style={styles.input}
                onChangeText={(values) => { setPassWord(values) }}
                // value={text}
                placeholder={"password"}
                keyboardType="default"
                secureTextEntry={true}
                maxLength={6}
            />
            <View style={styles.container}>
                <Button
                    title="Submit"
                    onPress={() => navigation.navigate("Dashboard")}
                />
            </View>

        </View>
        // { </SafeAreaView> }

    );
};

const styles = StyleSheet.create(
    {
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            color: "black"
        },
        container: {
            flex: 1,
            justifyContent: "flex-end",
            bottom: 20,
            marginHorizontal: 10,
        },

    });
export default Login;

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
    View, Text, StyleSheet
} from "react-native"
import { MainPage } from "../index";
import { Course } from "../screens/Course";
import { Dashboard } from "../screens/Dashboard";
import { Login } from "../screens/Login";
import { ProductDetails } from "../screens/ProductDetails";
import { Transport } from "../screens/Transport";



const Stack = createStackNavigator();
export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="Course" component={Course} />
                <Stack.Screen name="Transport" component={Transport} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}
const styles = StyleSheet.create(
    {
        input: {
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
        },
    })
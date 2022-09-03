import React from "react";
import {
    View, Text, FlatList, ScrollView, Image
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

const data = [
    {
        name: "P.Sundu",
    },
    {
        name: "S.Pappu",
    },
    {
        name: "Sp.Sunpa",
    },
    {
        name: "PS.Pasun",
    },
    {
        name: "RB.Riyab",
    },
    {
        name: "BR.Briyaz",
    },

]

export const Transport = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (

            <View style={{ paddingTop: 15, paddingBottom: 20, marginRight: 20 }}>
                <View style={{ height: 70, width: 70, borderRadius: 50, backgroundColor: "lightgrey", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "green", fontSize: 30, fontWeight: "bold" }}>{item?.name.charAt(0)}</Text>
                </View>
                <Text style={{ color: "green", textAlign: "center" }}>{item?.name}</Text>
            </View>
        )

    };
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "white", paddingVertical: 20, paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{
                        flex: 1
                        // paddingLeft: 30, paddingTop: 10
                    }}>
                        <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>Dispatch Schedule </Text>
                        {/* <Text style={{ color: "black", paddingTop: 5, fontWeight: "600", fontSize: 16 }}>Schedule</Text> */}
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
                            <Text style={{ paddingRight: 10, paddingLeft: 30, paddingVertical: 2, borderWidth: 1, borderRadius: 5, borderColor: "green", alignSelf: "center", fontSize: 16, fontWeight: "500", color: "green" }}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ borderRadius: 5, borderColor: "brown", marginLeft: 10, alignSelf: "center", paddingLeft: 30, paddingRight: 10, paddingVertical: 2, borderWidth: 1, fontSize: 16, fontWeight: "500", color: "brown" }}>
                            Delete
                        </Text>
                    </View>
                </View>

                <View style={{ marginTop: 10, marginHorizontal: 10, borderRadius: 5, paddingLeft: 15, paddingVertical: 8, backgroundColor: "lightgrey" }}>
                    <Text style={{ color: "green", fontWeight: "500" }}>Best Labz</Text>
                    <Text style={{ color: "green", fontWeight: "500" }}>Bangalore, Karnataka</Text>
                    <Text style={{ color: "green", fontWeight: "500" }}>fgh</Text>
                    <Text style={{ color: "green", fontWeight: "500", paddingTop: 20 }}>Salem, Tamilnadu, India</Text>
                </View>

                <View style={{ flex: 1, paddingTop: 5, paddingHorizontal: 15, marginHorizontal: 10, backgroundColor: "white", paddingBottom: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Commodity</Text>
                        <Text style={{ color: "black", fontWeight: "500" }}>Walnut</Text>
                    </View>

                    <View style={{ paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Quantity</Text>
                        <Text style={{ color: "black", fontWeight: "500" }}>100 Kg</Text>
                    </View>

                    <View style={{ paddingTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Quality</Text>
                        <Text style={{ color: "black", fontWeight: "500" }}>Others</Text>
                    </View>

                    <View style={{ paddingTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>Schedule On</Text>
                        <Text style={{ color: "black", fontWeight: "500" }}>15 Kg  20/07/2022</Text>
                    </View>

                    <Text style={{ paddingTop: 15, color: "black" }}>Select Locations</Text>

                    <View style={{ paddingLeft: 40, paddingTop: 25 }}>
                        <Text style={{ color: "grey", fontWeight: "600", fontSize: 18 }}>Select Location</Text>
                        <Text style={{ paddingTop: 5, color: "brown", fontWeight: "600", fontSize: 18 }}>Poicha, Gujarat, India</Text>
                    </View>

                    <View style={{ paddingLeft: 40, paddingTop: 60 }}>
                        <Text style={{ color: "grey", fontWeight: "600", fontSize: 18 }}>Destination Location</Text>
                        <Text style={{ paddingTop: 5, color: "brown", fontWeight: "600", fontSize: 18 }}>Eint Khedi, Madhya Pradesh, India</Text>
                    </View>

                    <Text style={{ paddingTop: 15, color: "black", fontWeight: "500" }}>Send Remainder To:</Text>

                    <View style={{ flexDirection: "row", paddingTop: 10, alignItems: "center" }}>
                        <View style={{ height: 25, width: 25, borderRadius: 15, backgroundColor: "brown", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require('../assets/icons/done.png')} style={{ height: 20, width: 20, tintColor: "white" }} />
                        </View>
                        <Text style={{ paddingLeft: 15, color: "black", fontWeight: "700" }}>Contacts</Text>
                    </View>

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        horizontal
                    />

                    <View style={{
                        backgroundColor: '#fff',
                        shadowColor: '#000',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.4,
                        shadowRadius: 3,
                        elevation: 5,
                    }}>

                        <View style={{ backgroundColor: "lightgrey", paddingVertical: 15, borderRadius: 3 }}>
                            <Text style={{ color: "green", textAlign: "center", fontWeight: "600" }}>
                                Trip Details
                            </Text>
                        </View>

                        <Text style={{ paddingTop: 20, paddingLeft: 20, fontSize: 16, fontWeight: "500" }}>Driver Name</Text>
                        <Text style={{ paddingTop: 12, paddingLeft: 20, fontWeight: "600", color: "lightgrey" }}>e.g. abc</Text>

                        <Text style={{ paddingTop: 40, paddingLeft: 20, fontSize: 16, fontWeight: "500" }}>Truck Details</Text>
                        <Text style={{ paddingTop: 12, paddingLeft: 20, fontWeight: "600", color: "lightgrey" }}>e.g. TN11 AA0000</Text>

                        <Text style={{ paddingTop: 40, paddingLeft: 20, fontSize: 16, fontWeight: "500" }}>Other Information</Text>
                        <Text style={{ paddingTop: 12, paddingLeft: 20, fontWeight: "600", color: "lightgrey", paddingBottom: 40 }}>e.g. driver details</Text>

                        <View style={{ marginHorizontal: 16, backgroundColor: "lightgrey", paddingVertical: 20, borderRadius: 3 }}>
                            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, color: "white" }}>Save</Text>
                        </View>

                    </View>

                </View>

            </View >
        </ScrollView>
    );
};
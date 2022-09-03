import React from "react";
import {
    View, Text, FlatList, StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// export const Dashboard = ({ navigation }) => {

const doctorData = [
    {
        name: 'Dr.Pappu',
        specialists: 'Cardiology',
        consultancyFee: '200',
        id: 'CB-2230',
        experience: '23 years',
        qualification: 'MBBS',
        location: 'Bangalore',
    },
    {
        name: 'Dr.Sundu',
        specialists: 'Cardiology',
        consultancyFee: '200',
        id: 'CB-2231',
        experience: '24 years',
        qualification: 'MBBS',
        location: 'Bangalore',
    },
    {
        name: 'Dr.Sunpa',
        specialists: 'Cardiology',
        consultancyFee: '200',
        id: 'CB-2232',
        experience: '23 years',
        qualification: 'MBBS',
        location: 'Bangalore',
    },
    {
        name: 'Dr.Taruls',
        specialists: 'Cardiology',
        consultancyFee: '200',
        id: 'CB-2233',
        experience: '23 years',
        qualification: 'MBBS',
        location: 'Bangalore',
    },
    {
        name: 'Dr.Maris',
        specialists: 'Cardiology',
        consultancyFee: '200',
        id: 'CB-2234',
        experience: '23 years',
        qualification: 'MBBS',
        location: 'Bangalore',
    },
    {
        name: 'Dr.Reena',
        specialists: 'Cardiology',
        consultancyFee: '200',
        id: 'CB-2235',
        experience: '23 years',
        qualification: 'MBBS',
        location: 'Bangalore',
    },
]
// }
export const Dashboard = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ borderWidth: 0.2, marginTop: 30 }}>
                <View style={{ flexDirection: "row", paddingTop: 20, paddingLeft: 50, paddingRight: 30, justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontWeight: "400", color: "red", fontSize: 15 }}>
                            {item?.name}
                        </Text>
                        <Text style={{ fontWeight: "normal", color: "grey", fontSize: 11 }}>
                            {item?.specialists}
                        </Text>
                    </View>
                    <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>
                        Rs.{item?.consultancyFee} /-
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 10, paddingTop: 30, paddingBottom: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ color: "grey", fontSize: 12 }}>
                            id
                        </Text>
                        <Text style={{ color: "black", fontSize: 12 }}>
                            {item?.id}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 12 }}>
                            experience
                        </Text>
                        <Text style={{ color: "black", fontSize: 12 }}>
                            {item?.experience}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 12 }}>
                            qualification
                        </Text>
                        <Text style={{ color: "black", fontSize: 12 }}>
                            {item?.Qualification}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: "grey", fontSize: 12 }}>
                            location
                        </Text>
                        <Text style={{ color: "black", fontSize: 12 }}>
                            {item?.location}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ fontWeight: "bold", color: "red", marginRight: 20, fontSize: 13 }}>
                    Favourites
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
                    {/* <View style={styles.container}> */}
                    <Text style={{ fontWeight: "normal", color: "black", fontSize: 13 }}>
                        Recent Searches
                    </Text>
                    {/* </View> */}
                </TouchableOpacity>
            </View>
            <FlatList
                data={doctorData}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Dashboard;


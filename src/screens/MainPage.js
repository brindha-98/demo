import React from "react";
import {
    View, Text
} from "react-native"

import { TouchableOpacity } from "react-native-gesture-handler";


export const MainPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <Text style={{ marginTop: 5, paddingTop: 15, paddingLeft: 10, color: "black", fontWeight: "bold" }}>Market</Text>

            <View style={{ backgroundColor: "white", margin: 10, borderRadius: 5, paddingBottom: 30 }}>
                <View style={{ flexDirection: "row", paddingLeft: 30, paddingTop: 30 }}>
                    <Text>Buyers</Text>
                    <View style={{ paddingLeft: 40 }}>
                        <Text>Sellers</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 20, paddingLeft: 10, marginRight: 10 }}>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 10, flexDirection: "row", justifyContent: "space-between", backgroundColor: "lightgrey" }}>
                        <Text style={{ alignSelf: "center", color: "black" }}>My Quotations</Text>
                        <View style={{ backgroundColor: "brown", borderRadius: 30, padding: 5, marginLeft: 10 }}>
                            <Text style={{ color: "white" }}>48</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "lightgrey" }}>
                        <Text style={{ alignSelf: "center", color: "black" }}>Enquiries</Text>
                        <View style={{ backgroundColor: "brown", borderRadius: 30, padding: 5, marginLeft: 15 }}>
                            <Text style={{ color: "white" }}>85</Text>
                        </View>
                    </View>
                </View>
            </View>


            <Text style={{ marginTop: 10, paddingLeft: 10, color: "black", fontWeight: "bold" }}>My Store</Text>

            <View style={{ backgroundColor: "white", marginHorizontal: 10, marginTop: 10, borderRadius: 5, paddingVertical: 20 }}>
                <View style={{ flexDirection: "row", paddingLeft: 30 }}>
                    <Text>Buy</Text>
                    <View style={{ paddingLeft: 40 }}>
                        <Text>Sell</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 25, paddingLeft: 8 }}>
                    <Text style={{ color: "black", fontWeight: "500" }}> Bajra</Text>
                </View>
                <View style={{ paddingTop: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, paddingRight: 10 }}>
                    <Text>Others</Text>
                    <Text style={{ color: "black" }}>55Kg</Text>
                </View>
                <View style={{ paddingTop: 5, flexDirection: "row", justifyContent: "space-between", paddingRight: 10, paddingLeft: 10 }}>
                    <Text style={{ color: "red" }}>Quotations:0</Text>
                    <Text style={{ color: "green" }}>Average Price:-</Text>
                </View>



                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 30, paddingLeft: 10 }}>
                    <Text style={{ color: "black", fontWeight: "500" }}>1121 Pusa</Text>
                </View>
                <View style={{ paddingTop: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, paddingRight: 10 }}>
                    <Text>Golden</Text>
                    <Text style={{ color: "black" }}>25Kg</Text>
                </View>
                <View style={{ paddingTop: 5, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={{ color: "red" }}>Quotations:2</Text>
                    <Text style={{ color: "green" }}>Average Price:- Rs.500.00/Kg</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Course")}>
                <Text style={{ paddingLeft: 10, paddingVertical: 5, backgroundColor: "pink", color: "green", marginHorizontal: 10 }}>View All</Text>
            </TouchableOpacity>

            <Text style={{ paddingTop: 20, paddingLeft: 10, color: "black", fontWeight: "bold" }}>Remainders</Text>

            <View style={{ paddingLeft: 50, paddingVertical: 15, backgroundColor: "white", margin: 10 }}>
                <Text style={{ paddingBottom: 20, color: "black" }}>Payment Remainders</Text>
                <Text style={{ color: "black" }}>Dispatch Schedule</Text>
            </View>




        </View>


    )
}



// const styles = StyleSheet.create(
//     {

//     });
export default MainPage;
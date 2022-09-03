import React, { useState } from "react";
import {
    View, Text, TextInput, StyleSheet, ScrollView,
} from "react-native"

import { TouchableOpacity } from "react-native-gesture-handler";

export const Course = ({ navigation }) => {
    const [search, setSearch] = useState(null);
    console.log(search);

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: "white", paddingBottom: 5 }}>

                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setSearch(value)
                        }}
                        // value={text}
                        placeholder="Search for anything..."
                        keyboardType="default"
                    />

                    <View style={{ marginHorizontal: 12, marginVertical: 8, paddingLeft: 15, paddingVertical: 10, borderWidth: 0.2, borderRadius: 2, borderColor: "grey" }}>
                        <Text style={{ color: "black", fontWeight: "bold", paddingBottom: 5, fontSize: 15 }}>
                            Hii! John Doe
                        </Text>
                        <Text style={{ fontSize: 12 }}>We hope you're loving the experience of the Cloud Academy</Text>
                    </View>

                    <View style={{ marginHorizontal: 12, marginVertical: 10, paddingLeft: 30, paddingTop: 20, paddingBottom: 20, borderWidth: 0.2, borderRadius: 2, borderColor: "grey" }}>
                        <Text style={{ fontSize: 14, fontWeight: "500", color: "black", paddingBottom: 20 }}>
                            You are not added to any batch yet
                        </Text>

                        <Text style={{ lineHeight: 18, letterSpacing: 0.5, paddingRight: 10, paddingBottom: 20 }}>
                            Enroll yourself in any of the schools you're interested in,you will automatically be added to the batch.
                        </Text>

                        <TouchableOpacity onPress={() => navigation.navigate("Transport")}>
                            <View style={{ backgroundColor: "blue", paddingVertical: 8, paddingLeft: 20, width: 195 }}>
                                <Text style={{ color: "white" }}>
                                    Search for cloud schools
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, marginTop: 30, backgroundColor: "white", paddingTop: 8, paddingBottom: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flex: 1, marginLeft: 12, marginVertical: 10, paddingLeft: 10, marginRight: 10, paddingVertical: 8, borderWidth: 0.2, borderRadius: 2, borderColor: "grey" }}>
                            <Text>
                                All Cloud schools
                            </Text>
                        </View>
                        <View style={{ flex: 1, marginVertical: 10, paddingLeft: 10, marginRight: 12, paddingVertical: 8, borderWidth: 0.2, borderRadius: 2, borderColor: "grey" }}>
                            <Text>
                                All Courses
                            </Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 15, marginHorizontal: 12, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flex: 1, backgroundColor: "red", borderRadius: 3 }}>
                            <Text style={{ color: "white", paddingLeft: 20, paddingTop: 10 }}>
                                Assignments
                            </Text>
                            <Text style={{ color: "white", paddingLeft: 20 }}>
                                Submitted
                            </Text>
                            <Text style={{ color: "white", paddingLeft: 20, paddingTop: 15, fontSize: 18, paddingBottom: 15 }}>
                                00
                            </Text>
                        </View>

                        <View style={{ flex: 1, marginLeft: 12, backgroundColor: "green", borderRadius: 3 }}>
                            <Text style={{ color: "white", paddingLeft: 20, paddingTop: 10 }}>
                                Tests
                            </Text>
                            <Text style={{ color: "white", paddingLeft: 20 }}>
                                Attempted
                            </Text>
                            <Text style={{ color: "white", paddingLeft: 20, paddingTop: 15, fontSize: 18 }}>
                                00
                            </Text>
                        </View>

                    </View>

                    <View style={{ marginTop: 15, marginHorizontal: 12, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flex: 1, backgroundColor: "green", borderRadius: 3 }}>
                            <Text style={{ color: "white", paddingLeft: 20, paddingTop: 10 }}>
                                Total Classes
                            </Text>
                            <Text style={{ color: "white", paddingLeft: 20 }}>
                                Attended
                            </Text>
                            <Text style={{ color: "white", paddingLeft: 20, paddingTop: 15, fontSize: 18, paddingBottom: 15 }}>
                                00
                            </Text>
                        </View>

                        <View style={{ flex: 1, marginLeft: 12, backgroundColor: "red", borderRadius: 3 }}>
                            <Text style={{ color: "white", paddingLeft: 20, paddingTop: 10 }}>
                                Assignments
                            </Text>
                            <Text style={{ color: "white", paddingLeft: 20 }}>
                                Submitted
                            </Text>
                            <Text style={{ color: "white", paddingLeft: 20, paddingTop: 15, fontSize: 18 }}>
                                00
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: "white", marginTop: 30, paddingTop: 15, paddingBottom: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: 15 }}>
                        <Text style={{ color: "black", marginHorizontal: 12, }}>What our students have to say</Text>
                        <Text style={{ color: "blue", marginHorizontal: 12 }}>+ Add</Text>
                    </View>
                    <View style={{ marginHorizontal: 12, backgroundColor: "blue", paddingVertical: 20, borderRadius: 3 }}>

                    </View>
                </View>


            </View>



        </ScrollView>
    );
};

const styles = StyleSheet.create(
    {
        input: {
            // height: 40,
            // margin: 12,
            // borderWidth: 1,
            // padding: 10,
            // color: "black"

            marginHorizontal: 12,
            marginVertical: 10,
            paddingLeft: 30,
            paddingVertical: 6,
            borderWidth: 0.2,
            borderRadius: 2,
            borderColor: "grey",
        },
    });
export default Course;
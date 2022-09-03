import React from "react";
import {
    View, Text, FlatList, ScrollView, Image,
} from "react-native"

export const ProductDetails = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ paddingTop: 5, backgroundColor: "white", marginHorizontal: 8, paddingBottom: 25, marginBottom: 5 }}>
                    <Text style={{ color: "black" }}>boAt Bassheads 100 Wired Headset</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ textDecorationLine: 'line-through' }}>999 </Text>
                        <Text style={{ color: "black" }}>  Rs.399</Text>
                        <Text style={{ color: "green" }}> 60% off</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: "white", paddingTop: 10, paddingLeft: 20, marginBottom: 5 }}>
                    <Text style={{ color: "black", fontSize: 16 }}>
                        Realme Buds 2 Wired Headset (Black, In the Ear)
                    </Text>
                    <Text style={{ paddingTop: 5 }}>6,33,126 ratings</Text>

                    <View style={{ flexDirection: "row", paddingTop: 10 }}>
                        <Text style={{ textDecorationLine: 'line-through', fontSize: 16, fontWeight: "500" }}>799 </Text>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>  Rs.599</Text>
                        <Text style={{ color: "green", fontSize: 16, fontWeight: "500" }}> 30% off</Text>
                    </View>

                    <Text style={{ color: "black", paddingTop: 8 }}>FREE Delivery</Text>
                    <Text style={{ color: "black", paddingVertical: 15 }}>
                        Seller changed. Check for any changes in pricing and related information.
                    </Text>
                </View>

                <View style={{ backgroundColor: "white", paddingTop: 10, paddingLeft: 20, flexDirection: "row", paddingBottom: 20, marginBottom: 5 }}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>Color:</Text>
                    <Text style={{ color: "blue", fontSize: 16, fontWeight: "500" }}>  Black</Text>
                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 14, paddingLeft: 20, flexDirection: "row", marginBottom: 5 }}>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: 16 }}>
                        All Offers & Coupons
                    </Text>
                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 14, paddingLeft: 20, flexDirection: "row", marginBottom: 5 }}>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: 16 }}>
                        8,200+
                    </Text>
                    <Text style={{ color: "black", fontSize: 16 }}> people ordered this in the last 7 days
                    </Text>
                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 18, flexDirection: "row", justifyContent: "space-around", marginBottom: 5, paddingHorizontal: 10 }}>
                    <View>
                        <Text style={{ color: "black" }}>
                            7 Days Service
                        </Text>
                        <Text style={{ color: "black" }}>
                            Center Returns
                        </Text>
                    </View>

                    <View>
                        <Text style={{ color: "black" }}>
                            Cash On Delivery
                        </Text>
                        <Text style={{ color: "black", textAlign: "center" }}>
                            available
                        </Text>
                    </View>

                    <Text style={{ color: "black" }}>
                        Plus (F-Assured)
                    </Text>

                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 20, flexDirection: "row", paddingLeft: 20, marginBottom: 5 }}>
                    <Text style={{ color: "black" }}>6 months warrenty</Text>
                    <Text style={{ color: "blue", fontWeight: "500" }}> Know More</Text>
                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 18, flexDirection: "row", paddingLeft: 20, marginBottom: 5 }}>
                    <Text style={{ color: "black" }}>You will earn</Text>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: 16 }}> 10 SuperCoins</Text>
                    <Text style={{ color: "black" }}> on this order</Text>
                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 18, paddingLeft: 20, marginBottom: 5 }}>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: 16 }}>Highlights</Text>
                    <Text style={{ color: "black", paddingTop: 15 }}>With Mic:Yes</Text>
                    <Text style={{ color: "black", paddingVertical: 10 }}>Connector type: 3.5 mm</Text>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: 15, paddingTop: 20 }}>All Details</Text>
                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 18, paddingHorizontal: 20, marginBottom: 5 }}>
                    <Text style={{ color: "black", fontWeight: "500", fontSize: 16 }}>About The Product</Text>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: "black", fontWeight: "500" }}>Powerful Bass</Text>
                        <Text style={{ color: "black", paddingTop: 12, lineHeight: 20 }}>
                            Enjoy a clear and elevated bass response when you use these earphones. The powerful 11.2-mm bass boost driver, comprising multi-layer composite diaphragm, delivers a deep and accurate bass response. So, you can stay entertained at any place and at any time.Enjoy a clear and elevated bass response when you use these earphones. The powerful 11.2-mm bass boost driver, comprising multi-layer composite diaphragm, delivers a deep and accurate bass response. So, you can stay entertained at any place and at any time.
                        </Text>
                    </View>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: "black", fontWeight: "500" }}>3-button Controls</Text>
                        <Text style={{ color: "black", paddingTop: 12, lineHeight: 20 }}>
                            Enjoy a clear and elevated bass response when you use these earphones. The powerful 11.2-mm bass boost driver, comprising multi-layer composite diaphragm, delivers a deep and accurate bass response. So, you can stay entertained at any place and at any time.Enjoy a clear and elevated bass response when you use these earphones. The powerful 11.2-mm bass boost driver.
                        </Text>
                    </View>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: "black", fontWeight: "500" }}>Built-in Magnets</Text>
                        <Text style={{ color: "black", paddingTop: 12, lineHeight: 20 }}>
                            Enjoy a clear and elevated bass response when you use these earphones. The powerful 11.2-mm bass boost driver, comprising multi-layer composite diaphragm, delivers a deep and accurate bass response.
                        </Text>
                    </View>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: "black", fontWeight: "500" }}>Tangle-free Design</Text>
                        <Text style={{ color: "black", paddingTop: 12, lineHeight: 20 }}>
                            Enjoy a clear and elevated bass response when you use these earphones. The powerful 11.2-mm bass boost driver, comprising multi-layer composite diaphragm, delivers a deep and accurate bass response. Enjoy a clear and elevated bass response when you use these earphones.
                        </Text>
                    </View>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: "black", fontWeight: "500" }}>Cable Organizer</Text>
                        <Text style={{ color: "black", paddingTop: 12, lineHeight: 20 }}>
                            Enjoy a clear and elevated bass response when you use these earphones. The powerful 11.2-mm bass boost driver, comprising multi-layer composite diaphragm.
                        </Text>
                    </View>

                    <View style={{ paddingTop: 30 }}>
                        <Text style={{ color: "black", fontWeight: "500" }}>Sophisticated Design</Text>
                        <Text style={{ color: "black", paddingTop: 12, lineHeight: 20, paddingBottom: 25 }}>
                            Enjoy a clear and elevated bass response when you use these earphones. The powerful 11.2-mm bass boost driver, comprising multi-layer composite diaphragm.when you use these earphones. The powerful 11.2-mm bass boost driver, comprising multi-layer composite diaphragm.
                        </Text>
                    </View>

                    <Text style={{ color: "black", fontWeight: "500", fontSize: 15, paddingTop: 25 }}>All Details</Text>

                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 18, paddingHorizontal: 20, marginBottom: 5 }}>
                    <Text style={{ color: "black", fontWeight: "500", textAlign: "center" }}>View Similar</Text>
                </View>

                <View style={{ backgroundColor: "white", paddingTop: 16, paddingBottom: 25, paddingHorizontal: 20, marginBottom: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "black" }}>Deliver to:</Text>
                        <Text style={{ color: "black", fontWeight: "500", paddingLeft: 16 }}>Brindha  ,</Text>
                        <Text style={{ color: "black", fontWeight: "500", paddingRight: 18 }}> 636455</Text>

                        <View style={{ backgroundColor: "grey", borderRadius: 10, paddingHorizontal: 2 }}>
                            <Text style={{ color: "white" }}>HOME</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                        <Text style={{ color: "blue" }}>Change</Text>
                    </View>

                    <Text style={{}}>153/2/1, 15th ward, 6 th street, kamaraj...</Text>

                    <View style={{ flexDirection: "row", paddingTop: 20 }}>
                        <Text style={{ color: "green", fontWeight: "500", paddingLeft: 25 }}>
                            FREE Delivery
                        </Text>

                        <Text style={{ textDecorationLine: "line-through" }}> Rs.40</Text>

                        <Text style={{ color: "black", fontWeight: "500", paddingLeft: 10 }}>
                            Delivery by 31 jul, Sunday
                        </Text>
                    </View>

                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 8, paddingHorizontal: 20, marginBottom: 5 }}>
                    <Text style={{ color: "black", fontSize: 12, textAlign: "right" }}>
                        Sign up & Get up to 500 Gift Card* Limited Period Offer!
                    </Text>
                    <Text style={{ color: "skyblue", fontSize: 12, fontWeight: "500", textAlign: "center" }}>
                        Activate Now
                    </Text>
                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 18, paddingHorizontal: 20, marginBottom: 5 }}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: "500", paddingLeft: 30 }}>
                        Frequently Bought Together
                    </Text>
                    <Text style={{ fontSize: 16, paddingLeft: 30, paddingTop: 6 }}>
                        With Realme Buds 2 Wired Headset
                    </Text>

                    <View style={{ paddingTop: 30, paddingLeft: 30 }}>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            realme 10000 mAh Power Bank (18 W, Quick Charge 3.0)
                        </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 8 }}>
                            (76,319)
                        </Text>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "black", fontSize: 16, paddingTop: 10, fontWeight: "500" }}>
                                Rs.1,199
                            </Text>
                            <Text style={{ color: "green", fontSize: 12, paddingTop: 11, fontWeight: "500" }}> Rs.100 off
                            </Text>
                        </View>
                    </View>


                    <View style={{ paddingTop: 30, paddingLeft: 30, paddingBottom: 15 }}>
                        <Text style={{ color: "black", fontSize: 16 }}>
                            Gizga Essentials Nylon Zipper Headphone Case
                        </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 20, paddingTop: 8 }}>
                            (17,319)
                        </Text>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "black", fontSize: 16, paddingTop: 10, fontWeight: "500" }}>
                                Rs.239
                            </Text>
                            <Text style={{ color: "green", fontSize: 12, paddingTop: 11, fontWeight: "500" }}> Rs.260 off
                            </Text>
                        </View>
                    </View>

                </View>

                <View style={{ backgroundColor: "white", paddingVertical: 18, paddingHorizontal: 20, marginBottom: 5 }}>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: "500", paddingBottom: 20 }}>
                        Flipkart Protection Products
                    </Text>

                    <View style={{
                        backgroundColor: '#fff',
                        shadowColor: '#000',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.4,
                        shadowRadius: 3,
                        borderRadius: 10,
                        elevation: 5,
                    }}>

                        <View style={{ paddingVertical: 20, paddingHorizontal: 30, backgroundColor: "lightyellow", borderRadius: 10 }}>
                            <Text style={{ color: "black" }}>
                                Flipkart Protect
                            </Text>
                            <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>
                                Extended warrenty 1 Year
                            </Text>
                        </View>

                        <View style={{ paddingTop: 10, paddingLeft: 20, paddingBottom: 20 }}>
                            <Text style={{ color: "black", fontSize: 12 }}>
                                The powerful 11.2-mm bass boost multi-layer
                            </Text>

                            <Text style={{ color: "black", fontSize: 12, paddingTop: 5 }}>
                                Elevated bass response when you use these earphones
                            </Text>

                            <Text style={{ color: "black", fontSize: 12, paddingTop: 8 }}>
                                The powerful 11.2-mm bass boost multi-layer, elevated bass response when you use these earphones
                            </Text>

                            <Text style={{ color: "blue", fontSize: 12, paddingTop: 12 }}>
                                See more details
                            </Text>

                            <Text style={{ color: "black", fontSize: 12, paddingTop: 20 }}>
                                Digital Suraksha for Rs.50,000 by Bajaj Allianz
                            </Text>
                        </View>

                        <View style={{ paddingVertical: 20, paddingHorizontal: 30, backgroundColor: "lightyellow", borderRadius: 10 }}>
                            <Text style={{ color: "black" }}>
                                Flipkart Protect
                            </Text>
                            <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>
                                Extended warrenty 1 Year
                            </Text>
                        </View>

                        <View style={{ paddingTop: 10, paddingLeft: 20, paddingBottom: 20 }}>
                            <Text style={{ color: "black", fontSize: 12 }}>
                                The powerful 11.2-mm bass boost multi-layer
                            </Text>

                            <Text style={{ color: "black", fontSize: 12, paddingTop: 5 }}>
                                Elevated bass response when you use these earphones
                            </Text>

                            <Text style={{ color: "black", fontSize: 12, paddingTop: 8 }}>
                                The powerful 11.2-mm bass boost multi-layer, elevated bass response when you use these earphones
                            </Text>

                            <Text style={{ color: "blue", fontSize: 12, paddingTop: 12 }}>
                                See more details
                            </Text>

                            <Text style={{ color: "black", fontSize: 12, paddingTop: 20 }}>
                                Digital Suraksha for Rs.50,000 by Bajaj Allianz
                            </Text>
                        </View>



                    </View>

                </View>




            </View>
        </ScrollView >
    );
};
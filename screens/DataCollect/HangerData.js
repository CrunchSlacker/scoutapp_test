import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export const HangerData = () => {
    const [hanger, setHanger] = useState("none");
    return (
        <View style={{ alignSelf: 'flex-start', justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 25 }}>Hanger: {hanger}</Text>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginTop: 10 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        width: 60, height: 30,
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => setHanger("none")}
                >
                    <Text>None</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        width: 60, height: 30,
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => setHanger("Low")}
                >
                    <Text>Low</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        width: 60, height: 30,
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => setHanger("Mid")}
                >
                    <Text>Mid</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        width: 60, height: 30,
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => setHanger("High") }
                >
                    <Text>High</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        borderRadius: 5,
                        width: 80, height: 30,
                        marginRight: 10, marginTop: 10,
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    onPress={() => setHanger("Traversal")}
                >
                    <Text>Traversal</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
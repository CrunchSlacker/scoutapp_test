import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons"
import styles from '../../App';

export const CargoData = () => {
    const [cargoLower, setCargoLower] = useState(0);
    const [cargoUpper, setCargoUpper] = useState(0);

    function subtractLower() {
        cargoLower <= 0 ? setCargoLower(0) : setCargoLower(cargoLower - 1);
    }

    function addLower() {
        setCargoLower(cargoLower + 1);
    }

    function subtractUpper() {
        cargoUpper <= 0 ? setCargoUpper(0) : setCargoUpper(cargoUpper - 1);
    }

    function addUpper() {
        setCargoUpper(cargoUpper + 1);
    }

    return (
        <View style={styles.cargoContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ fontSize: 25 }}>Cargo Lower: </Text>
                <AntDesign name='minus' size={35} color={'grey'} style={{ marginTop: 0, marginRight: 5 }} onPress={subtractLower} />
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 4, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{cargoLower}</Text>
                </TouchableOpacity>
                <AntDesign name='plus' size={35} color={'grey'} style={{ marginTop: 0, marginLeft: 5 }} onPress={addLower} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ fontSize: 25 }}>Cargo Upper: </Text>
                <AntDesign name='minus' size={35} color={'grey'} style={{ marginTop: 0, marginRight: 5 }} onPress={subtractUpper} />
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 4, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{cargoUpper}</Text>
                </TouchableOpacity>
                <AntDesign name='plus' size={35} color={'grey'} style={{ marginTop: 0, marginLeft: 5 }} onPress={addUpper} />
            </View>
        </View>
        
    )
}
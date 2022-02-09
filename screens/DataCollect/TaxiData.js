import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';
import styles from '../../App';

export const TaxiData = () => {
    const [taxi, settaxi] = useState(false);

    return (
        <View style={{display: 'flex'}}>
            <View View style={styles.taxiContainer} >
                <Text style={{ fontSize: 25 }}>Taxi: </Text>
                {/* add human player shot*/}
                <Switch
                    style={{ position: 'absolute', bottom: 0, left: 50, }}
                    trackColor={{ false: "grey", true: "grey" }}//#767577
                    thumbColor={taxi ? "black" : "black"}//#f5dd4b
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => { taxi ? settaxi(false) : settaxi(true) }}
                    value={taxi}
                />
            </View>
        </View>
    )
}
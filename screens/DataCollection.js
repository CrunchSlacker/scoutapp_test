import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { AntDesign } from "@expo/vector-icons"
import React, { useState } from 'react';
import { styles } from '../App';
import { TaxiData } from './DataCollect/TaxiData';
import { CargoData } from './DataCollect/CargoData';
import { HangerData } from './DataCollect/HangerData';

export const DataCollection = (props) => {
    const [teamNum, setteamNum] = useState(null);
    const [matchNum, setmatchNum] = useState(null);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ backgroundColor: '#dedbd5' }}>
                <Text style={styles.TitleStyle}>Data Collection Page</Text>
                {/* Team Number Input */}
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginLeft: 25 }}>
                    <TextInput
                        value={teamNum}
                        onChangeText={setteamNum}
                        placeholder="Team Number"
                        keyboardType="number-pad"
                        maxLength={4}
                        textAlign="center"
                        style={styles.identityInputs}
                    />
                    {/* Match Number Input */}
                    <TextInput
                        value={matchNum}
                        onChangeText={setmatchNum}
                        placeholder="Match Number"
                        keyboardType="number-pad"
                        maxLength={3}
                        textAlign="center"
                        style={styles.identityInputs}
                    />
                </View>
                <Text style={styles.TitleStyle}>----  Autonomous  ----</Text>
                <View style={{ alignSelf: 'center' }}>
                    <TaxiData />
                    <CargoData />
                </View>
                <Text style={{ alignSelf: 'center', marginTop: 30, fontSize: 30 }}>
                    ----  Teleop  ----
                </Text>
                <View style={{ alignSelf: 'center' }}>
                    <CargoData />
                    <HangerData />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
                    <AntDesign name='close' size={45} color={'#0782F9'} style={{ marginRight: 60 }} onPress={() => props.onClick(false)} />
                    <AntDesign name='check' size={45} color={'#0782F9'} style={{ marginLeft: 60 }} onPress={() => alert("submitted")}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
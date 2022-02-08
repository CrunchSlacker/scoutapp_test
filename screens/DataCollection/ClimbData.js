import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../App";

export class ClimbData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { climbLevel: 0 };
        this.setClimbLevel = this.setClimbLevel.bind(this);
    }

    setClimbLevel(e) {
        let climbLevel = e.target.innerHTML;
        this.setState({ climbLevel: climbLevel });
    }

    render() {
        return (
            <>
                <Text>Climb Level: {this.state.climbLevel}</Text>
                <View style={styles.cargoButtons}>
                    <TouchableOpacity style={styles.climbButtons} onPress={this.setClimbLevel}>1</TouchableOpacity>
                    <TouchableOpacity style={styles.climbButtons} onPress={this.setClimbLevel}>2</TouchableOpacity>
                    <TouchableOpacity style={styles.climbButtons} onPress={this.setClimbLevel}>3</TouchableOpacity>
                    <TouchableOpacity style={styles.climbButtons} onPress={this.setClimbLevel}>4</TouchableOpacity>
                </View>
            </>
        );
    }
}

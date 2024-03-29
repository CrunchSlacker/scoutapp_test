import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Switch,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { styles } from "../App";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataCollection: this.props.dataCollectPage };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(true);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://static.wixstatic.com/media/398287_40b3117e8571414381b6dba84bf96a0a~mv2.png/v1/fill/w_115,h_104,al_c,q_85,usm_0.66_1.00_0.01/square_whitespace.webp",
          }}
        />
        <View>
          <Text style={styles.TitleStyle}>Techno Titans</Text>
          <TouchableOpacity
            style={styles.ButtonsContainer}
            onPress={this.handleClick}
          >
            <Text style={styles.TitleStyle}>Scout Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
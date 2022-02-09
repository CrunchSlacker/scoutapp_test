import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Home } from './screens/Home';
import { DataCollection } from './screens/DataCollection';

export default function App() {
  const [showDataCollect, setshowDataCollect] = useState(false);

  return (
    <View style={styles.container}>
      {showDataCollect ? <DataCollection onClick={(showPage) => setshowDataCollect(showPage)} /> : <Home onClick={(showPage) => setshowDataCollect(showPage)} />}
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  taxiContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 45
  },
  cargoContainer: {
    display: "flex",
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 45
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 100,
    marginRight: 30,
  },
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
  },

  TitleStyle: {
    fontSize: 30,
    alignSelf: "center",
  },

  ButtonsContainer: {
    backgroundColor: "#0782F9",
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderRadius: 10,
    marginTop: 100
  },

  addButton: {
    backgroundColor: "#194D33",
    borderRadius: 5,
    width: 80, height: 30,
    marginRight: 10, marginTop: 10,
    justifyContent: 'center', alignItems: 'center'
  },

  subtractButton: {
    backgroundColor: "#F44336",
    borderRadius: 5,
    width: 80, height: 30,
    marginRight: 10, marginTop: 10,
    justifyContent: 'center', alignItems: 'center'
  },

  cargoButtons: {
    display: "flex",
    flexDirection: "row"
  },

  identityInputs: {
    backgroundColor: "#ABB8C3",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 150,
    marginRight: 30,
  },

  climbButtons: {
    backgroundColor: "#FFB2E6",
    borderRadius: 5,
    width: 40, height: 30,
    marginRight: 10, marginTop: 10,
    justifyContent: 'center', alignItems: 'center'
  },

});
import * as React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from "./shared/header";
import Feedback from "./components/feedback";
// import TeachInSuperSkool from "./components/teachInSuperSkool";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.list}>
        <Text style={styles.text}>
          Feedback
        </Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>
          Teach in SuperSkool
        </Text>
      </View>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1
  },
  text:{
    padding:15
  },
  list:{
    paddingLeft: 20,
    borderBottomWidth:2,
    borderBottomColor:'#eee'
  }
})


export default App;


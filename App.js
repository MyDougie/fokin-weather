import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  getLocatoin = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync({});
      console.log(latitude, longitude);
      this.setState({isLoading:false, latitude, longitude});
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount(){
    this.getLocatoin();
  }

  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}


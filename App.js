import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import axios from "axios";
import * as Location from "expo-location";
import Weather from './Weather';

const API_KEY = "90de177aa069544c306c2370a7c53ed3";

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const {
        data: {
            main: {
                temp
            },
            weather
        }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    //console.log(data);
    this.setState({isLoading:false, condition:weather[0].main, temp});
  }

  getLocatoin = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync({});
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount(){
    this.getLocatoin();
  }

  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather condition={condition} temp={Math.round(temp)} />;
  }
}


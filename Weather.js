import React from "react";
import Today from "./Today";
import Week from "./Week";
//import { StyleSheet, Text, View, StatusBar } from "react-native";

export default class Weather extends React.Component{
  constructor(props){
    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      isToday: true
    };
    
  }

  //handler = (latitude, longitude) => {
    handler (latitude, longitude){
    this.setState({
      isToday: false,
      latitude,
      longitude
    });
  }

  render(){
    console.log("render!!");
    const { isToday , latitude, longitude} = this.state;
    console.log("lati : ", latitude);
    console.log("longi : ", longitude);
    
    return ( isToday ?
      <Today action={this.handler} /> :
      <Week latitude={latitude} longitude={longitude} />
    )
    
  };

}

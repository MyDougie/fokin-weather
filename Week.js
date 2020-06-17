import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Loading from "./Loading";
import axios from "axios";

const API_KEY = "263b7bd99b135f4bedcc4414bb0f8cb0";

export default class Week extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: true
        }
    }


    // getWeather = async(latitude, longitude) => {
    //     const {
    //         data: {
    //             main: {
    //                 temp
    //             },
    //             weather
    //         }
    //     } = await axios.get(
    //       `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    //     );
    //     console.log(temp);
    //     this.setState({isLoading:false, latitude, longitude, condition:weather[0].main, temp: Math.round(temp)});
    // }

    getWeather = async (latitude, longitude) => {
        //http://api.openweathermap.org/data/2.5/forecast/daily?lat=37.480405&lon=126.9496464&cnt=7&appid=90de177aa069544c306c2370a7c53ed3
        await axios.get();
    }

    componentDidMount(){
        const { latitude, longitude } = this.props;
        
        this.getWeather(latitude, longitude);
    }

    render(){
        const { isLoading } = this.state;

        return isLoading ? <Loading /> : <Text>Week</Text>
    };
}
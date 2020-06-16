import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Do not go outside."
      },
      Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
      },
      Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
      },
      Rain: {
        iconName: "weather-pouring",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rainism~",
        subtitle: "For more info look outside"
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Coldbrew",
        subtitle: "Do you want to build a snowman? no."
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I don't like cloud but beer :)"
      },
      Mist: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
      },
      Dust: {
        iconName: "weather-cloudy-alert",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
      }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            
            <View style={styles.rightMenuView}>
              <Text style={styles.rightMenuText}>
                week <FontAwesome name="refresh" size={24} color="white" />
              </Text>
            </View>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}} >
                <View>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "green",
        width: "100%"

    },
    title: {
        fontSize: 40,
        color: "white",
        fontWeight: "300",
        marginBottom: 10

    },
    subtitle : {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
        left: "7%"
    },
    rightMenuText: {
      color: "white",
      justifyContent: 'flex-end',
      right: "25%",
      fontSize: 22
    },
    rightMenuView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      width: "100%",
      top: "17%"
    }

});
import { View, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';

export default function MyStatusBar ({...props}) {
    const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight:0
  
    return (
        <View style={{backgroundcolor: props.backgroundColor, height: statusBarHeight}}>
            <StatusBar
                {...props}
            />
        </View>
    );
}

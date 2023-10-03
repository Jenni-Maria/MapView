import React from 'react';
import { AppBar, IconButton, HStack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialIcons";

export default function MapApplicationBar({backgroundColor, title, locationIcon, getUserPosition, navigation}) {
    return (
        <AppBar
        title={title}
        backgroundColor={backgroundColor}
        trailing={props => (
            <HStack>
                <IconButton
                icon={props => <Icon name={locationIcon} {...props} />}
                onPress={getUserPosition}
                {...props}
                />
                <IconButton
                icon={props => <Icon name='settings' {...props} />}
                onPress={() => {navigation.navigate('settings')}}
                {...props}
                />
            </HStack>
        )}
    />
    )
    
}
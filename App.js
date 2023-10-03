import React, { useState } from 'react';
import Map from './screens/Map';
import { SafeAreaView,StyleSheet } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import Settings from './screens/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const settings = {
  backgroundColor: '#00a484'
}

export default function App() {

  const [mapType, setMapType] = useState ('standard')
  const Stack = createNativeStackNavigator()

  return (
    <>
        <MyStatusBar 
        backgroundColor={settings.backgroundColor}
        barStyle='light-content'
        />
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Map' screenOptions={{headerShown: false}}>
              <Stack.Screen name="map">
                {(props) => 
                  <Map
                  {...props}
                  backgroundColor={settings.backgroundColor}
                  title="Map demo"
                  mapType={mapType}
            />
                
              }
              </Stack.Screen>
                <Stack.Screen name="settings">
                {(props) => 
                  <Settings
                  {...props}
                  backgroundColor={settings.backgroundColor}
                  title="Asetukset"
                  setMapType={setMapType}
                  />
                  }
                </Stack.Screen>
          
            
              </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
import { Text, View, StyleSheet } from 'react-native'
import React, { useEffect, useState} from 'react'
import NavigateBackApplication from '../components/NavigateBackApplication'
import { Picker } from '@react-native-picker/picker'

export default function Settings({...props}) {
    const [selectedType, setSelectedType] = useState(props.mapType)

useEffect (() => {
    props.setMapType('satellite')
    props.setMapType('standard')
    
}, [])

  return (
    <>
    <NavigateBackApplication {...props} />
    <View style={StyleSheet.settingsArea}>
      <Text style={StyleSheet.heading}>Select map type</Text>
      <Picker
      selectedValue={selectedType}
      onValueChange={(itemValue) => {
        setSelectedType(itemValue)
        props.setMapType(itemValue)
      }}
      >
        <Picker.Item label="Standard" value="standard" />
        <Picker.Item label="Satellite" value="satellite" />
        
        

      </Picker>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    settingsArea: {
        marginTop: 32,
        marginLeft: 16,
    },
    headin: {
        color: global.backgroundColor,
        textTransform: 'uppercase'
    }
})
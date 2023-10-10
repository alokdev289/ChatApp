import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Users from '../tabs/Users'
import Setting from '../tabs/Setting'

const Main = () => {
    const [selectedtab, setSelectedTab] = useState(0)
  return (
    <View style={styles.container}>
      {selectedtab == 0 ? <Users/> : <Setting/>}
      <View style={styles.bottomTab}>
        <TouchableOpacity
        style={styles.tab}
        onPress={()=>{
            setSelectedTab(0)
        }}>
            <Image
            source={require('../images/users.png')}
            style={[styles.tabIcon,
            {tintColor: selectedtab ==0 ? 'white' : '#A09F9F'},]}
            />
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.tab}
        onPress={()=>{
            setSelectedTab(1)
        }}>
            <Image
            source={require('../images/setting.png')}
            style={[styles.tabIcon,
            {tintColor: selectedtab ==1 ? 'white' : '#A09F9F'},]}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      bottomTab: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: 'purple',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      tab: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabIcon: {
        width: 30,
        height: 30,
      },
    
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Splash from '../scripts/Splash'
import SignUp from '../scripts/SignUp'
import Login from '../scripts/Login'
import Main from '../scripts/Main'
import Chat from '../scripts/Chat'

const Stack = createStackNavigator()
const AppNavigators = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen 
        name='Splash' 
        component={Splash} 
        options={{headerShown: false}}
        />
           <Stack.Screen 
        name='SignUp' 
        component={SignUp} 
        options={{headerShown: false}}
        />
             <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{headerShown: false}}
        />
                <Stack.Screen 
        name='Main' 
        component={Main} 
        options={{headerShown: false}}
        />
                 <Stack.Screen 
        name='Chat' 
        component={Chat} 
        options={{headerShown: true}}
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigators

const styles = StyleSheet.create({})
import 'react-native-gesture-handler'
import * as React from 'react'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "./screens/Home"
import IssLocationScreen from "./screens/IssLocation"
import MeteorScreen from "./screens/Meteors"
const stack=createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home"componet={HomeScreen}/>
        <Stack.Screen name="IssLocation"componet={IssLocationScreen}/>
        <Stack.Screen name="Meteors"componet={MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


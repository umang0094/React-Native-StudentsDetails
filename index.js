/**
 * @format
 */
import React,{createContext, useState} from 'react';
import {View, Text, AppRegistry} from 'react-native';
import Home from './src/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Add from './src/AddScreen';
import { Provider } from './src/Contex/StudentContext';
import List from './src/ListScreen'
const Stack = createNativeStackNavigator();


const App = () =>{
    return(
        <Provider>
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Add" component={Add} />
                <Stack.Screen name="List" component={List} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

AppRegistry.registerComponent('students', () => App);

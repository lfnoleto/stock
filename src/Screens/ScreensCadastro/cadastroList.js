import React from 'react';
import { View,Text } from 'react-native';
import{createStackNavigator}from '@react-navigation/stack'
import{NavigationContainer}from '@react-navigation/native'
// import { Container } from './styles';

const Stack = createStackNavigator()

export default props => {
    return(
       <Text>Olá </Text>
    )
}
import React from 'react';
import { View } from 'react-native';
import{createStackNavigator}from '@react-navigation/stack'
import{NavigationContainer}from '@react-navigation/native'
import cadastroForm from './cadastroForm';
import UserList from './cadastroList';
// import { Container } from './styles';

const Stack = createStackNavigator()

export default props => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={UserList}
            >
                <Stack.Screen

                    name='UserList'
                    component={UserList}
                />

                <Stack.Screen
                    name='UserForm'
                    component={cadastroForm}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
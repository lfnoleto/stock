/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Image} from 'react-native';
import Router from './Router'
import Qrcode from './Components/Qrcode/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import img from  '../src/Image/Logotipo.png'
import screens from '../src/Screens/Notfications/index'

const Stack = createStackNavigator();
//source={img}
function App() {
  return (
    <NavigationContainer>
      	<Stack.Navigator initialRouteName="Home">
        	<Stack.Screen name="Estoque" component={Router} 
            	options={{
                
                	headerTitle: (props) => (
                    	<Image style={{ width: 300, height: 70 , alignSelf:'center'}}  resizeMode='contain'/>
                	),
                	headerTintColor: '#fff',
                	headerTitleStyle: {
                  	fontWeight: 'bold',
                },
                headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
              
			}}
			
			
        />
      	<Stack.Screen name="Details" component={Qrcode} 
			options={{
          		headerTitle: (props) => ( 
                    <Image style={{ width: 300, height: 80 , alignSelf:'center',flex:1, paddingEnd:400}}  resizeMode='contain'/>
                ),
				headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
				
            }}
		/>
      	</Stack.Navigator>
    </NavigationContainer>
  );
}
//source={img}
export default App;



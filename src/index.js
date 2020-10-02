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
import cadastro from '../src/Router'
import Qrcodesolicitacao from '../src/Components/QrcodeCadastro/index'
import solicitacao from '../src/Screens/Cadastro/index'
import auth from '../src/auth/SignInScreen'
import Usuario from '../src/Screens/ScreensCadastro/index'
import Usuarios from '../src/Screens/ScreensCadastro/cadastroList'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      	<Stack.Navigator initialRouteName="Compra">
        	<Stack.Screen name="Estoque" component={Router} 
            	options={{
                
                	headerTitle: (props) => (
                    	<Image style={{ width: 300, height: 70 , alignSelf:'center'}}  source={img} resizeMode='contain'/>
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
                    <Image style={{ width: 300, height: 80 , alignSelf:'center',flex:1, paddingEnd:400}} source={img}  resizeMode='contain'/>
                ),
				headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
				
            }}
		/>

		<Stack.Screen name="Compra" component={cadastro} 
			options={{
          		headerTitle: (props) => ( 
                    <Image style={{ width: 300, height: 80 , alignSelf:'center',flex:1, paddingEnd:400}} source={img}  resizeMode='contain'/>
                ),
				headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
				
            }}
		/>
			<Stack.Screen name="qrcodes" component={Qrcode} 
			options={{
          		headerTitle: (props) => ( 
                    <Image style={{ width: 300, height: 80 , alignSelf:'center',flex:1, paddingEnd:400}} source={img}  resizeMode='contain'/>
                ),
				headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
				
            }}
		/>

		<Stack.Screen name="Solicitacao" component={solicitacao} 
			options={{
          		headerTitle: (props) => ( 
                    <Image style={{ width: 300, height: 80 , alignSelf:'center',flex:1, paddingEnd:400}} source={img}  resizeMode='contain'/>
                ),
				headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
				
            }}
		/>

		<Stack.Screen name="usuarios" component={Usuarios} 
			options={{
          		headerTitle: (props) => ( 
                    <Image style={{ width: 300, height: 80 , alignSelf:'center',flex:1, paddingEnd:400}} source={img}  resizeMode='contain'/>
                ),
				headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
				
            }}
		/>

		
      	</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from './Screens/Home/index'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import teste from './Screens/index'
import Qrcode from '../src/Components/Qrcode/index'
import Notifications from './Screens/Notfications/index'
  const Tab = createBottomTabNavigator();

  const icons = {
    Home:{
      lib: AntDesign,
      nome:'home',
    },
    Qrcode:{
      lib: AntDesign,
      nome:'appstore-o',
    },
  
    Notifications:{
      lib: Ionicons,
      nome:'create',
    },
    Settings:{
      lib: AntDesign,
      nome:'setting',
    }
  
  }

  export default function Navigation() {
    return (
      
        <Tab.Navigator
    
        screenOptions={({route,navigation}) =>({
          tabBarIcon:({color,size,focused})=>{ 
          const {lib: Icons,nome:name} = icons[route.name];
            return <Icons name={name} size={size} color={color}  />
          },
        })}

        tabBarOptions={{
            style:{
              
              borderColor:'rgba(255,255,255,0.2)'
            },

            activeTintColor:'#242e7c',
            inactiveTintColor:'#92929c',
          }
        }
      
      >
          <Tab.Screen name="Home" component={HomeScreens} options={{title:'Baixa'}} />
          <Tab.Screen name="Qrcode" component={Qrcode}  options={{title:'Estoque'}} />     
          <Tab.Screen name="Notifications" component={Notifications}  options={{title:'Cadastro'}} />
          <Tab.Screen name="Settings" component={teste}  options={{title:'Ajustes'}} />
        </Tab.Navigator>
        
    )
  }
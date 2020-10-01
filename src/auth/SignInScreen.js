import React, { useState } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  SafeAreaView
} from 'react-native';
import AzureAuth from 'react-native-azure-auth';
const CLIENT_ID = '2dfdd386-5a84-44d2-ae9a-780d48bc5fa0' // replace the string with YOUR client ID
import { Surface,  } from 'react-native-paper';
import Lottie from 'lottie-react-native'
import helloworld from '../Image/qr.json'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
const azureAuth = new AzureAuth({
    clientId: CLIENT_ID
  });


export default function Auth0Sample (){
	const navigation = useNavigation();	
	const [accessToken,setacessToKen] = useState()
	const [user,setUser] = useState()
	const [mails,setMails] = useState()
	const [userId,setUserId] = useState()

 const  _onLogin = async () => {

    try {

		let tokens = await azureAuth.webAuth.authorize({scope: 'openid profile User.Read' })
		setacessToKen(tokens.accessToken)

		let info = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: 'me'})
		setUser(info.displayName)
		setUserId(tokens.userId)
		AsyncStorage.setItem('user',user)
		navigation.navigate('Compra',{data:user})	

    } catch (error) {

     	 console.log('Error during Azure operation', error)
	}
	
  };
 

 const _onGetMails = async () => {
    try {
			let tokens = await azureAuth.auth.acquireTokenSilent({scope: 'Mail.Read', userId: this.state.userId})
		
			if (!tokens) {
				tokens = await azureAuth.webAuth.authorize({scope: 'Mail.Read'})
				console.log('NewWeb:', tokens)
			}
		
			let mails = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: '/me/mailFolders/Inbox/messages'})
			let mailArr = []
			mails.value.forEach(element => {
				mailArr.push({subject: element.subject})
			});
		if (mailArr.length === 0) {
			mailArr.push({subject: 'No mails found'})
		} 
      	setMails(mailArr)
    } catch (error) {
      console.log(error)
    	}
    }
  

  const _onLogout = () => {
    azureAuth.webAuth
      .clearSession()
      .then(success => {
		setacessToKen(null)
		setUserId(null)
      })
      .catch(error => console.log(error));
  };

	let loggedIn = accessToken  ? true : false;
	
    return (

      	<SafeAreaView style={styles.container}>
		
				<SafeAreaView style={{alignItems:"center", flex:1,justifyContent:'center',marginBottom:40}}>
					<Lottie resizeMode="contain"  source={helloworld} autoPlay loop/>			
				</SafeAreaView>
			<View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
					
				<Surface style={styles.surface}>
					<View style={styles.card}>
						<Text style={styles.header}>Bem-vindo(a)</Text>
						<Text style={styles.text}> Faça login para entrar na plataforma {user}!</Text>
						<Text style={styles.text}>  {loggedIn ? '' : 'not '}.</Text>
						<View style={styles.card1}>
							
							<Button
								onPress={loggedIn ? _onLogout : _onLogin}
								title={loggedIn ? 'Sair' : 'Login'}
							/>
						</View>
					</View>
				</Surface>
			</View>

			<View style={styles.button}>
				<Button
						
					onPress = {_onGetMails}
					disabled={!loggedIn}
					title={'Login E-Mails'}
					/>
			</View>
				<FlatList 
						data={mails}
						renderItem={({item}) => <Text style={{padding: 10}}>{item.subject}</Text>}
						keyExtractor={(item, index) => `key-${index}`}
				/>
   		</SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
	alignItems: 'center',
	alignItems: 'center',
    backgroundColor: '#F8F9F9'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
	margin: 10,
	marginTop:15
  },
  


  text: {
    textAlign: 'center'
  },
  surface: {
    padding: 8,
    height: 190,
    width: 368,
    alignItems: 'center',
    justifyContent: 'center',
	elevation: 4,
	margin:10,
	alignItems:'center'

	
  },
  card1:{
	

	marginTop:10,
	fontSize:15,

},
  buttons: {
   	color:'#2196F3',
	padding:20,
	marginTop:15,
	marginTop:5,
	marginTop:100,
	
  },
  button: {
	padding:10,
	margin:10,
	marginTop:5
  },
  list: {
    flex: 5,
    margin:20
  },

});

AppRegistry.registerComponent('Auth0Sample', () => Auth0Sample);
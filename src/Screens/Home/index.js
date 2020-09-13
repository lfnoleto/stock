'use strict';
import React, { useRef,useState,useEffect}from 'react';
import { View,Text,KeyboardAvoidingView, Button,Image,StyleSheet,TouchableOpacity,StatusBar } from 'react-native';
import {Wrapper,Header,Conteiner,BalanceContainer,BalanceTitle,Balance,} from './styled'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Qrcode from '../../Components/Qrcode/index'
import { Form } from '@unform/mobile';
import Input from './Input';
import { Scope } from '@unform/core';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import EmailSender from 'react-native-smtp';




const  Home = ()=>{

	const navigation = useNavigation();
	const [codigo,setCodigo] = useState()
	const [descricao,setDescricao] = useState()
	
	const Data = async ()=>{
		
		const valor = await (await AsyncStorage.getItem('key_default')).split('@')
		const codigos = valor[0]
		const descri =valor[1]
		setCodigo(codigos)
		setDescricao(descri)
		
	}


	useEffect(() => {
		Data()
		
	  })
	 
	const email = (codigoSap,descr) =>{
		 
		// Configuration
		EmailSender.config({
			host: 'smtp.office365.com',
			port: '587', // Optional. Default to 465
			
			isAuth: 'true', // Optional. Default to `true`
			tls: 'true' // Optional. Default to `true`
		});
		
		/*
		* Used react-native-fs module to get file path.
		* Keep this array empty if there is no attachment.
		*/
		const attachments = [
			//RNFS.ExternalStorageDirectoryPath + '/Tracklist/file.txt',
			//RNFS.ExternalStorageDirectoryPath + '/Tracklist/file_2.txt',
		];
		
		// Now send the mail
		EmailSender.send(
			{
				from: 'bot.mail@jallesmachado.com',
				to: 'lucasnoleto18@gmail.com',
				subject: 'BAIXA DE MATERIAL',
				body: `<h3>[${1}]-[${codigoSap}]-[${descr}]-[${10000020303}]</h3>`
			},
			attachments, // This second parameter is mandatory. You can send an empty array.
		);



	} 


  	return(
	
    	<Wrapper>
     		<Conteiner>
	  			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
        		<Header>
					<TouchableOpacity onPress={() => navigation.navigate('Details')}>
						<MaterialCommunityIcons name='qrcode-scan'size={30} color='#242e7c'/>
					</TouchableOpacity>        
       			</Header>
		

				<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>

					<View>
						<Form  initialData={{ desc:descricao,sap:codigo}}>

							<Image style={styles.logo} source={{ uri: "https://storage.googleapis.com/golden-wind/unform/unform.png" }}/>
							<Input name="name" label="Nome Completo:"  />
							<Input name="desc" label="Descrição:" />		
							<Input name="sap" label="Código SAP:" autoCorrect={false}autoCapitalize="none"keyboardType="number-pad"/>
							<Input name="qdt" label="Quantidade:" keyboardType="number-pad" />
							<TouchableOpacity style={styles.submitButton} onPress={() => email(codigo,descricao)}>
								<Text style={styles.submitButtonText}>Enviar</Text>
							</TouchableOpacity>
						</Form>
					</View>
				
				</KeyboardAvoidingView>
      		</Conteiner>
	  
    	</Wrapper>
    )
}


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'stretch',
	  padding: 20,
	},
  
	logo: {
	  width: 120,
	  height: 150,
	  resizeMode: 'contain',
	  alignSelf: 'center',
	},
  
	submitButton: {
	  backgroundColor: '#242e7c',
	  borderRadius: 4,
	  padding: 16,
	  alignItems: 'center'
	},
  
	submitButtonText: {
	  fontWeight: 'bold',
	  color: '#fff',
	  fontSize: 15,
	},
  });

export default Home
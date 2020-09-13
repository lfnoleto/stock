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
							<TouchableOpacity style={styles.submitButton} onPress={() => formRef.current.submitForm()}>
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
import React, {useState}from 'react';
import { View,SafeAreaView, Alert } from 'react-native';
import { Wrapper,Conteiner, } from './styled';
import { TextInput,Divider,HelperText,Text,Button } from 'react-native-paper';
import { Input } from 'react-native-elements';
import styles from '../config/styles'
import LottieView from 'lottie-react-native'
import  rocker  from "../../Image/18889-rocket-qualibrate.json";
import AsyncStorage from '@react-native-community/async-storage';

/**
 *    <View style={{alignItems:"center", flex:1,justifyContent:'center',width:100, margin:10}}>
            <LottieView resizeMode="contain"  source={rocker} autoPlay loop/>	
		</View>
 * 
*/



export default props =>{

	const [email,setEmail] = useState()
	const [senha,setSenha] = useState()
	const [emailCc,setEmailCc] = useState()

	const onChangeEmail = text => setEmail(text);
	const onChangeSenha = text => setSenha(text);
	const onChangeEmailCc = text => setEmailCc(text);
	const cadastro = async (email,senha,emailCC)=> {

		try {
			if(email!=null&&email!=''&&senha!=null&&senha!=''&&emailCC!=null&&emailCC!=''){
				
				await AsyncStorage.setItem('email',email)
				await AsyncStorage.setItem('senha',senha)
				await AsyncStorage.setItem('emailCC',emailCC)
				
				Alert.alert("Senha Salvo com Sucesso!")
				setEmail('')
				setSenha('')
				setEmailCc('')
			}
			else{
				Alert.alert("Todos os Compos deve ser preenchindo!")
			}
		} catch (error) {
			Alert.alert('Opss parece que aconteceu um error '+error)
		}
		

	}
	

	const emailErrors = () => {
		return !email != '';
		
	}

	const senhaErrors = () => {
		return !senha != '';
		
	}

	const emailCcErrors = () => {
		return !emailCc != '';
		
	}
  return(
    <Wrapper>

		<View style={{alignItems:"center", flex:2,justifyContent:'center', margin:5}}>
            <LottieView resizeMode="contain"  source={rocker} autoPlay loop/>	
			
		</View>
		<Conteiner>

		
        <Divider style={{margin:5}} />
		<View style={{margin:2,alignContent:'center', justifyContent:'center',fontSize:15,alignItems:'center'}}>
			<Text style={{fontSize:20,margin:10}}>Configuração Padrão.</Text>
		</View>
        <View style={{flex:4,padding:5}}>
			<View style={{padding:10}}>
				<TextInput 
					label="E-mail:"
					value={email}
					onChangeText={onChangeEmail}
					left = {<TextInput.Icon name = "account" />}
				/>
				<HelperText type="info" visible={emailErrors()}>
					E-mail  Padrão é baixadematerial.ti@*******.com ! 
      			</HelperText>
			</View>	

          	<View style={{padding:10}}>
             	 <TextInput 
			  		label="Senha:"
			  		value={senha}
			  		onChangeText={onChangeSenha}
              		left = {<TextInput.Icon name = "lock" />}
              		secureTextEntry
            	/>
				<HelperText type="error" visible={senhaErrors()}>
					Senha do e-mail.
      			</HelperText>
          	</View>

			<View style={{padding:10}}>
				<TextInput 
					label="E-mail Cc:"
					value={emailCc}
					onChangeText={onChangeEmailCc}
					left = {<TextInput.Icon name = "account" />}
				/>
				<HelperText type="info" visible={emailCcErrors()}>
					E-mail Cc. 
      			</HelperText>
			</View>	 

		  <Divider />
		  <Button style={{margin:20}} icon="email" mode="contained" onPress={() => cadastro(email,senha,emailCc)}>
				Enviar Solicitação
			</Button>
        </View>

		
		</Conteiner>
    </Wrapper>
  )
}
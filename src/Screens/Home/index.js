'use strict';
import React, { useRef,useState,useEffect}from 'react';
import { View,KeyboardAvoidingView,TouchableOpacity,StatusBar, Alert} from 'react-native';
import {Wrapper,Header,Conteiner} from './styled'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { TextInput,RadioButton,Button,HelperText } from 'react-native-paper';
import {email} from '../../Components/email/email'
import {styles} from './styles'

const  Home = ({data})=>{
	const formRef = useRef();
	const navigation = useNavigation();
	const [codigo,setCodigo] = useState()
	const [descricao,setDescricao] = useState()
	const [solicitante,setSolicitante] = useState('')
	const [Quantidade,setQdt] = useState()
	const [custo,SetCentroCusto] = useState()
	
	const  [emaill,setEmail] = useState()
	const  [senha,setSenha] = useState()
	const  [emailCc,setEmailCc] = useState()	


	const [value, setValue] = React.useState('first');
	useEffect(() => {Data()})
	useEffect(() => {config()})
	const onChangeSolicitante = text => setSolicitante(text);
	const onChangeQuantidade = text => setQdt(text);
	const onChangecusto = text => SetCentroCusto(text);
	const onChangedescricao = text => setDescricao(text);
	const onChangecodigo = text => setCodigo(text);

	const SolicitanteErrors = () => {
		return !solicitante != '';
		
	};
	
	const quantidadeErrors = () => {
		return !Quantidade != ''
		
	};

	const custoErrors = () => {
		return !custo != ''
		
	};

	const descricaoErrors = () => {
		return !descricao != ''
		
	};

	const codigoErrors = () => {
		return !codigo != ''
		
	};

	const user = async ()=>{
		const valor = await AsyncStorage.getItem('user')
		setSolicitante(valor)
	
	}
	

	const Data = async ()=>{
		const valor = await (await AsyncStorage.getItem('key_default')).split('@')		
		const codigos = valor[0]
		const descri =valor[1]
		setCodigo(codigos)
		setDescricao(descri)
		
		
	}


	const config = async ()=>{
	
		const emails  = await AsyncStorage.getItem('email')
		const senhas   = await AsyncStorage.getItem('senha')
		const emailCcs =  await AsyncStorage.getItem('emailCC')
		setEmail(emails)
		setSenha(senhas)
		setEmailCc(emailCcs)

	}




	const enviar =()=>{


		if(solicitante!=''&&codigo!=''&&descricao!=''&&Quantidade!=''&&custo!=''){

			email(codigo,descricao,solicitante,Quantidade,custo,value,emaill,senha,emailCc)
			setCodigo('')
        	setDescricao('')
        	setQdt('')
			SetCentroCusto('')

		}else{

			Alert.alert(
				'Error',
				'Todos os campos é de preenchimento obrigatório',
				[ {text: "Cancel",onPress: () => console.log("Cancel Pressed"),style: "cancel"},{ text: "OK", onPress: () => console.log("OK Pressed") }],
				{ cancelable: false }
			)
		}
		
		
		
	}


  	return(
	
    	<Wrapper>
     		<Conteiner>
	  			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
        		<Header>
					<TouchableOpacity onPress={() => navigation.navigate('Details')} style={{marginTop:10}}>
						<MaterialCommunityIcons name='qrcode-scan'size={35} color='#242e7c'/>
					</TouchableOpacity>        
       			</Header>
		

				<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>

					<View>
						<View></View>
						<TextInput 
							
							label="Nome Completo:"
							style={styles.input}
							value={solicitante}
							onChangeText={onChangeSolicitante}
							left = {<TextInput.Icon name = "account" />}


						/>
						<HelperText type="info" visible={SolicitanteErrors()}>
       						 Nome Completo obrigatorio!
      					</HelperText>
						
						<View>
							<TextInput 
								
								label="Descrição:"
								value={descricao}
								style={styles.input}
								left = {<TextInput.Icon name = "android-messages" />}

								onChangeText={onChangedescricao}
								
								
								/>
								<HelperText type="info" visible={descricaoErrors()}>
									Preenchimento com QR-Code! 
      							</HelperText>
						</View>
						<View>
							<TextInput 
								
								label="Código SAP:"
								value={codigo}
								keyboardType = 'numeric'
								style={styles.input}
								//disabled={true}
								left = {<TextInput.Icon name = "numeric" />}
								onChangeText={onChangecodigo}
								/>
								<HelperText type="info" visible={codigoErrors()}>
									Preenchimento com QR-Code! 
      							</HelperText>
						</View>
						<View>
							<TextInput 
								label="Quantidade:"
								keyboardType = 'numeric'
								value={Quantidade}
								left = {<TextInput.Icon name = "minus" />}
								onChangeText={onChangeQuantidade}
								style={styles.centrodecustoStyles}
							/>
							<HelperText type="info" visible={quantidadeErrors()}>
							Preenchimento do campo é obrigatório!
      						</HelperText>
						
						</View>
						<View>
							<TextInput 
								label="Centro de Custo:"
								keyboardType = 'numeric'
								value={custo}
								left = {<TextInput.Icon name = "minus-box" />}
								onChangeText={onChangecusto}
								style={styles.centrodecustoStyles}
							/>
							<HelperText type="info" visible={custoErrors()}>
							Preenchimento do campo é obrigatório!
      						</HelperText>
						</View>
						

						<RadioButton.Group onValueChange={value => setValue(value)} value={value} >
							<RadioButton.Item label="1000 - Jalles Machado" value="1000" />
							<RadioButton.Item label="1001 - Otávio Lage" value="1001" />
						</RadioButton.Group>
						<Button style={styles.submitButton} icon="email" mode="contained" onPress={() => enviar()}>
							Enviar Solicitação
						</Button>

					</View>
				
				</KeyboardAvoidingView>
      		</Conteiner>
	  
    	</Wrapper>
    )
}

export default Home
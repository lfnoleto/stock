'use strict';

import React from 'react';
import {StyleSheet,Text,StatusBar,View,SafeAreaView} from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import {Wrapper,Conteiner} from './styled'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Lottie from 'lottie-react-native'
import qr from '../../Image/qr.json'

const Details = ()=>{
	const navigation = useNavigation();	
	const saveValueFunction = (e)=>{

		if(e != null){
			
			AsyncStorage.setItem('compra',e.data)
			
			navigation.navigate('Solicitacao',{data: 'Potato '})

		}else{
		  	alert('Está com error local Store')			
		} 
	}

	const getValueFunction =()=>{
		AsyncStorage.getItem('compra').then(
		  value => this.setState({getValue: value})
		)
	}

		return (
			<Wrapper>
				<Conteiner>
					<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
					<QRCodeScanner 
						flashMode={RNCamera.Constants.FlashMode.off}
											
						onRead={saveValueFunction}						
					/>
					<BarcodeMask width={300} height={300} showAnimatedLine={true} outerMaskOpacity={0.80} edgeColor='#fff'/>	
						
				</Conteiner>
				<SafeAreaView style={{alignItems:"center", flex:1,justifyContent:'center',marginBottom:40}}>
					<Lottie resizeMode="contain"  source={qr} autoPlay loop/>			
				</SafeAreaView>
			</Wrapper>     
		)
}
	

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});



export default Details
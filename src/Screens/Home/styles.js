'use strict';
import React, { useRef,useState,useEffect}from 'react';
import { View,KeyboardAvoidingView,Image,StyleSheet,TouchableOpacity,StatusBar, Alert } from 'react-native';

export const styles = StyleSheet.create({
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
	  borderRadius: 10,
	  padding: 5,
	  alignItems: 'center',
	  marginTop:30
	},
  
	submitButtonText: {
	  fontWeight: 'bold',
	  color: '#fff',
	  fontSize: 10,
	},
	input:{
		marginTop:15
	},
	radio:{
		marginTop:35
	},
	centrodecustoStyles:{
		marginBottom:15,
		marginTop:15
	}
  });

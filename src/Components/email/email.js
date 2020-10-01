
'use strict';
import React from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import EmailSender from 'react-native-smtp';
import {html} from '../../Components/email/index'


const alertPlay = (Titulo,Messagem) => Alert.alert(
    `${Titulo}`,
    `${Messagem}`,
    
    [ {text: "Cancel",onPress: () => console.log("Cancel Pressed"),style: "cancel"},{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
);


const deleteDate = async () => {
    try {
      await AsyncStorage.removeItem('key_default');
    } catch (error) {
      // Error retrieving data
      //console.log(error.message);
    }
}

export const email = (codigo,descricao,solicitante,Quantidade,custo,value) =>
{

		
    const title = 'Sucesso'
    const messagem = 'Sua solicitação de Baixa foi Enviada com Sucesso!'
    EmailSender.config({host: 'smtp.office365.com',port: '587', username: 'baixadematerial.ti@jallesmachado.com',password: 'Dur81284',isAuth: 'true',tls: 'true' });
    const attachments = [];
    console.log(html(solicitante,Quantidade,codigo,descricao,custo))
    //eduarda.peixoto@jallesmachado.com,suporte@jallesmachado.com
    try{
        EmailSender.send({from: '',subject: `[BAIXA DE MATERIAL R018-${value}]`,
                body: html(solicitante,Quantidade,codigo,descricao,custo)
                
            },attachments,);
            
            

        
        alertPlay(title,messagem)
    
        deleteDate()

    }catch(error){

        const title = 'Error'
        const messagem = `Error ao enviar sua solicitação ${error}`
        alertPlay(title,messagem)
        
    }

    
	} 
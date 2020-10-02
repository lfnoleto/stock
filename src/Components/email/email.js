
'use strict';
import React,{useState} from 'react';
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
   
    }
}



 export const email = (codigo,descricao,solicitante,Quantidade,custo,value,emaill,senha,emailCc) =>
{
    
    const title = 'Sucesso'
    const messagem = 'Sua solicitação de Baixa foi Enviada com Sucesso!'
    EmailSender.config({host: 'smtp.office365.com',port: '587', username:`${emaill}`,password:`${senha}`,isAuth: 'true',tls: 'true' });
    const attachments = [];
    
    try{
        EmailSender.send({from: 'baixadematerial.ti@jallesmachado.com',to: `${emailCc},suporte@jallesmachado.com`,subject: `[BAIXA DE MATERIAL ${value}]`,
            body: html(solicitante,Quantidade,codigo,descricao,custo)
                
        },attachments,);
            
        alertPlay(title,emaill)
    
        deleteDate()       

    }catch(error){

        const title = 'Error'
        const messagem = `Error ao enviar sua solicitação ${error}`
        alertPlay(title,messagem)
        
        
    }

    
} 
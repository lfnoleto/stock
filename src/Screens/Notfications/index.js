import React,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity,Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textInputdate : '',
      getValue:'',
    }
  }

  saveValueFunction =()=>{
    if(this.state.textInputdate){
      AsyncStorage.setItem('key_default', this.state.textInputdate)
      this.setState({textInputdate:''})
      alert('dados salvo')
    }else{
      alert('salva valor')
    } 
  }


  getValueFunction =()=>{
    AsyncStorage.getItem('key_default').then(
      value => this.setState({getValue: value})
    )
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.textinputStyle}
          placeholder='Digite aqui'
          value={this.state.textInputdate}
          onChangeText={data => this.setState({textInputdate: data}) 
          
          
          }/>

        <TextInput 
          style={styles.textinputStyle}
          placeholder='Digite aqui'
          value={this.state.textInputdate}
          onChangeText={data => this.setState({textInputdate: data}) 
          
          
          }/>

          <TouchableOpacity onPress={this.saveValueFunction}>
            <Text>enviar salvo</Text>
          </TouchableOpacity>

          
          <TouchableOpacity onPress={this.getValueFunction}>
            <Text>Ler salvo</Text>
          </TouchableOpacity>
          <Text>
            {this.state.getValue}
          </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textinputStyle:{
    textAlign:'center',
    width:'100%',
    borderColor:'blue',
    borderWidth:1,
  }
})
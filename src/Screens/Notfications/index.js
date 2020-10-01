import * as React from 'react';
import { Surface, Text,  } from 'react-native-paper';
import { StyleSheet,ScrollView,SafeAreaView,TouchableOpacity,View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/core';


const MyComponent = () => {

	const navigation = useNavigation()



		return(
			<SafeAreaView style={styles.Contenter}>
				<ScrollView >
					<TouchableOpacity onPress={() => navigation.navigate('Compra')}>
						<Surface style={styles.surface}>
							<View style={styles.card}>
								<Text style={styles.card1}>Solicitação de compra</Text>
								<View style={styles.card1}>
									<EvilIcons name='arrow-right'size={45} color='#242e7c' />
								</View>
							</View>
						</Surface>
					</TouchableOpacity>	
				</ScrollView>
		</SafeAreaView>
	);
}

export default MyComponent;


const styles = StyleSheet.create({
	card:{
		flexDirection:'row'
	},
	card1:{
		alignItems: 'center',
		justifyContent: 'center',
		margin:50,
		fontSize:15,

	},
	
  surface: {
    padding: 8,
    height: 100,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
	elevation: 4,
	margin:10,
	
  },
  Contenter:{
	  flex:1,
	  justifyContent:'center',
	  alignItems: 'center',

  },
  
});
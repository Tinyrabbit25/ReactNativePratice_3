import { StyleSheet, Text, View, Image} from 'react-native'

import Logo from '../assets/Light.jpg'

const index = () => {
  return (
<View style = {styles.container}>
<Image source = {Logo} style = {styles.img}/>

  <Text style = {styles.title} >My App</Text>

  <Text style = {{marginTop: 10, marginBottom: 10,}}>
    The Music App 
  </Text>

    <View> 
        <Text style = {styles.card}> Hello This is a card</Text>
    </View>

</View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5
    },
    img:{
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20
    },
    card:{
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 5,
        boxShadow: '4px 4px 10px rgba(0,0,0,0.1)',
        width: '80%',
        textAlign: 'center'
    }
})
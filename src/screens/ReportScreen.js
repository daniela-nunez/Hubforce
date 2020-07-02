import * as React from 'react';
import FieldSet from 'react-native-fieldset';
import {View, Text, StyleSheet, TouchableHighlight, form } from 'react-native';
import { isConstructorDeclaration } from 'typescript';
import { TextInput, IconButton, Colors} from 'react-native-paper'


export default function ReportScreen() {
  
  const [value1, onChangeText1] = React.useState('Ingrese...');
  const [value2, onChangeText2] = React.useState('Ingrese...');
  const [value3, onChangeText3] = React.useState('Ingrese...');
  const [value4, onChangeText4] = React.useState('Ingrese...');
  const [value5, onChangeText5] = React.useState('Ingrese...');
  const [value6, onChangeText6] = React.useState('Ingrese...');
  const [value7, onChangeText7] = React.useState('Ingrese...');
  
 return (
    <View style={styles.container}>

        <View style={styles.header}>

              <TouchableHighlight style={styles.button}>
              <Text style= {styles.textButoon}>Electro</Text>           
              </TouchableHighlight>  
              
              <TouchableHighlight style={styles.button}>
              <Text style= {styles.textButoon}>Bazar</Text>           
              </TouchableHighlight> 
            
              <TouchableHighlight style={styles.button}>
              <Text style= {styles.textButoon}>Otros</Text>           
              </TouchableHighlight> 
         
      </View>

    <View style={styles.body}>
    
      <View style={styles.bodyLeft}>

      <form>
      
          
            <Text for="nya">Identificador:</Text>
            <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20}}
            label="email" disabled={true} />


            <Text for="nya">Línea:</Text>
            <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20}}
            label="email" disabled={true} />  



            <Text for="edad">Vendedor:</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
            onChangeText={text => onChangeText1(text)}
            value={value1} />



            <Text for="nya">Color:</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,  marginBottom: 20}}
            onChangeText={text => onChangeText2(text)}
            value={value2} />



            <Text for="email">Cantidad:</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom: 20}}
            onChangeText={text => onChangeText3(text)}
            value={value3}/>

      <IconButton
        icon="headset"
        color={Colors.red500}
        size={20}
        onPress={() => console.log('Pressed')}
      />
   </form>
   </View>

      <View style={styles.bodyRight}>
      
      <form>   
            <Text for="nya">Precio:</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom: 20}}
            onChangeText={text => onChangeText4(text)}
            value={value4} />

         

            <Text for="email">Medio de pago:</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom: 20}}
            onChangeText={text => onChangeText5(text)}
            value={value5} />

          

            <Text for="edad">Descripción:</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom: 20}}
            onChangeText={text => onChangeText6(text)}
            value={value6}/>

        

            <Text for="nya">Con envío:</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom: 20}}
            onChangeText={text => onChangeText7(text)}
            value={value7} />

         

          <Text for="nya">Cliente</Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom: 20}}
            onChangeText={text => onChangeText7(text)}
            value={value7} />

    
            <TouchableHighlight style={styles.buttonEnviar}>
            <Text style= {styles.textButoon}>Enviar</Text>           
            </TouchableHighlight> 
        
    </form>

      </View>
      
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 0.3,
    flexDirection : 'column',
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  
  },
  button : {
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    width: '20%',
    height: '100%',
    marginLeft: '10%',
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonEnviar: {
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    width: '50%',
    height: '20%',
    marginLeft: '10%',
    justifyContent: 'center',
  },
  textButoon: {
    textAlign: 'center',
    color: '#e6e6fa'
  },
  header : {
    flex : 1,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  body : {
    flex : 3,
    flexDirection : 'row',
  },
  bodyLeft : {
    flex : 1,
    alignItems: 'center',
    marginTop:20
  },
  bodyRight : {
    flex : 1,
    alignItems: 'center',
    marginTop:20
  }
  });

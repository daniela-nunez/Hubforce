import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Alert, Text, FlatList, TouchableOpacity, Button, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function Dashboard() {

  return (
    <View style={styles.container}>


        <Text style={styles.textContainer}>
          FORMULARIO 1
          <View style={styles.buttonContainer}>
          
          <Button          
            title="EDIT"
            color="blue"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
          </View>
          <View style={styles.buttonContainer}>
          <Button
            title="DELETE"
            color="blue"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
          </View>
        </Text>
        <Text style={styles.textContainer}>
          FORMULARIO 2
          <View style={styles.buttonContainer}>
          
          <Button          
            title="EDIT"
            color="blue"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
          </View>
          <View style={styles.buttonContainer}>
          <Button
            title="DELETE"
            color="blue"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
          </View>
        </Text>
        <Text style={styles.textContainer}>
          FORMULARIO 3
          <View style={styles.buttonContainer}>
          
          <Button          
            title="EDIT"
            color="blue"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
          </View>
          <View style={styles.buttonContainer}>
          <Button
            title="DELETE"
            color="blue"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
          </View>
        </Text>
        
          </View>

  );
}

Dashboard.navigationOptions = {
  header: null,
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393e46',


  },

  textContainer: {
    textAlign: "center",
    marginTop: 7,
    marginLeft: 7,
    color: "#e8ead3",
    backgroundColor: "#000000"
  },

  buttonContainer: {
    paddingLeft: 20

  }

  
});

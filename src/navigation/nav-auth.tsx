import React, { memo } from 'react';
import { StyleSheet, Platform } from 'react-native';
import Logo from '../components/Logo';
import Contacts from '../screens/Contacts';
import Dashboard from '../screens/Dashboard';
import { Navigation } from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardTabs from '../screens/DashboardTabs'
import {
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';

type Props = {
  navigation: Navigation;
};

const Stack = createStackNavigator();

function componentWillUnmount(){
  this.props.navigation.state.params.onClose()
}

const NavAuth = ({ navigation }: Props) => {

  let user = navigation.getParam('user', {});
  let token = navigation.getParam('token', {});

  if (!user.name) {
    navigation.navigate('LoginScreen');
    //return;
  }

  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://api-test.waynimovil.com/alerts',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
    >
    <Stack.Screen
        name="Home"
        component={DashboardTabs}
        options={{
          headerTitleAlign:'center',
          title: 'HUBFORCE',
          headerStyle: {
          backgroundColor: '#5F04B4',
          fontWeight: 'bold',
          font:'white',
          },
        }}
      />
    </Stack.Navigator>
  );
}
export default memo(NavAuth);
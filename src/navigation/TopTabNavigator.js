import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen'; 
import LinksScreen from '../screens/LinksScreen';
import FormScreen from '../screens/FormScreen';
import Dashboard from '../screens/Dashboard';

const TopTab = createMaterialTopTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function TopTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <TopTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <TopTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          headerMode: 'none',
        }}
      />
      <TopTab.Screen
        name="Form"
        component={FormScreen}
        options={{
          title: 'Nuevo Formulario',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />

    </TopTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Form':
      return 'Formulario';

  }
}

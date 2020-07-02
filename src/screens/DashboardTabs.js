import React, { memo } from 'react';
import { StyleSheet, Platform } from 'react-native';
import Dashboard from './Dashboard';
import ReportScreen from './ReportScreen';
import FormScreen from './FormScreen';
import EditScreen from './EditScreen';
import { Navigation } from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

type Props = {
    navigation: Navigation;
};

const getTabBarIcon = (name: string) => ({
    color,
    size,
}: {
    color: string;
    size: number;
}) => <MaterialCommunityIcons name={name} color={color} size={size} />;

type TopTabParams = {
    Dashboard: undefined;
    FormScreen: undefined;
    ReportScreen: undefined;
    EditScreen: undefined;
};

const TopTabs = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const DashboardTabs = ({ navigation }: Props) => {
    return (
        <TopTabs.Navigator
        screenOptions={{
            tabBarButton:
            Platform.OS === 'web'
                ? undefined
                : (props) => <TouchableBounce {...props} />,
            
        }}
        >
        <TopTabs.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
            title: 'Home',
            tabBarIcon: getTabBarIcon('file-document-box'),
            }}
            initialParams={{ itemId: 42 }}
        />
        <TopTabs.Screen
            name="FormScreen"
            component={FormScreen}
            options={{
            title: 'Crear Formulario',
            tabBarIcon: getTabBarIcon('file-document-box'),
            }}
           
        />
        <TopTabs.Screen
            name="ReportScreen"
            component={ReportScreen}
            options={{
            title: 'Generar Reporte',
            tabBarIcon: getTabBarIcon('file-document-box'),
            }}
           
        />
        <TopTabs.Screen
            name="EditScreen"
            component={EditScreen}
            options={{
            title: 'Editar Perfil',
            tabBarIcon: getTabBarIcon('file-document-box'),
            }}
            
        />
        
        </TopTabs.Navigator>
    )
};


const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        padding: 8,
    },
    button: {
        margin: 8,
    },
});

export default memo(DashboardTabs);
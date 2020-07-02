import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Title from '../components/Title';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import axios from "axios"

import { Dialog, Portal } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  let user = {};

  let state = {
    visible: false,
  };

  const _hide = () => this.setState({ visible: false });
    
  return (<Background>
    <Title>Hola {user ? user.first_name : 'sin Nombre'}</Title>
    <Paragraph>
        Sitio para generar e importar reportes de ventas. 
    </Paragraph>
  
  </Background>);
};

export default memo(Dashboard);

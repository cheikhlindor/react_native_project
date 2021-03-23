import React from 'react';
import { View } from 'react-native';

import ActionButton from 'react-native-action-button';
import {  Icon } from 'react-native-elements';
import APP_COLORS from '../../styles/color';



const ButtonAddTask = ({onPressCallback}) => (


    
    <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => onPressCallback()}>
    
  </ActionButton>


);

export default ButtonAddTask;
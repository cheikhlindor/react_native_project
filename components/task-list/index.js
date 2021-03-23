import React from 'react';
import { View } from 'react-native';
import {  Badge, ListItem } from 'react-native-elements';
import TASK from '../../model';
import APP_COLORS from '../../styles/color';


const TaskList = ({ taskList, onPressCallBack }) => (

<View>
  {
    taskList.map((l, i) => (
      <ListItem key={i} onPress={() => onPressCallBack(l)}>
      
        <ListItem.Content>
          <ListItem.Title>{l.content} </ListItem.Title>
        </ListItem.Content>
        
        <Badge
               value={l.status}
                 textStyle={{ color: 'orange' }}
                  containerStyle={{ marginTop: -20 }}             
  />

      </ListItem>
    ))
  }
</View>

);


export default TaskList;
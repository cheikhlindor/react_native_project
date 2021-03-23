import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Dialog from "react-native-dialog";





export default function AddTaskPrompt ({isVisible, onCancellCallback, onSubmitCallBack}) {

    const [textInputValue, setTextInputValue] = React.useState('');

   return (
<View>
    <Dialog.Container visible={isVisible}>
      <Dialog.Title>Ajouter une tâche</Dialog.Title>
      <Dialog.Description>
        Voulez vous ajouter une tâche supplémentaire?
      </Dialog.Description>

      <TextInput
       style={{ 
    	height: 40, 
    	borderColor: 'gray', 
    	borderWidth: 1,
    	placeholderTextColor: 'gray',
    }}
      onChangeText={text => setTextInputValue(text)}
      value={textInputValue}
	  placeholder="Insert your text!"
      />
      <Dialog.Button label="Cancel" onPress={() => onCancellCallback()}/>
      <Dialog.Button label="ajouter" onPress={ value => onSubmitCallBack(value)}/>
    </Dialog.Container>
  </View>
)
}


import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { styles } from './style';


const MenuTask = ({ isVisible, onDisapearCallback, onDeleteCallBack, onChangeStatusCallBack }) => (


<TouchableWithoutFeedback    onPress = {() => onDisapearCallback()}>
    <Modal 
    isVisible={isVisible}
    animationIn={'zoomInDown'}
    animationOut={'zoomOutUp'}
    animationInTiming={1000}
    animationOutTiming={1000}
    backdropTransitionInTiming={1000}
    backdropTransitionOutTiming={1000}
    >
        <TouchableWithoutFeedback>
        <View  style={styles.modal}>
        <View style={styles.textView}>
            <Text>Que souhaitez vous faire sur la tâche?</Text>
        </View>
        <View style={styles.buttonView}>
            <Button 
            buttonStyle={styles.buttonDelete}
            title = "Supprimer"
            onPress = {() => onDeleteCallBack()}
            />
            <Button 
              buttonStyle={styles.buttonChangeStatus}
            title = "Changer Status"
            onPress = {() => onChangeStatusCallBack()}
            />
          
        </View>
        </View>
        </TouchableWithoutFeedback>
    </Modal>
    </TouchableWithoutFeedback>
);

export default MenuTask;
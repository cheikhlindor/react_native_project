import React from 'react';
import lodash from 'lodash';
import { View, Text, ScrollView } from 'react-native';
import Header from './components/header';
import { Button } from 'react-native-elements';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import TASK from './model';
import AddTaskPrompt from './components/add-task-prompt';

const taskList = [
  {id: 0,
  content: 'Aller voir Sébastien',
  status: 'En cours'},

 {id: 1,
    content: 'Se brosser les dents',
    status: 'En cours'},

 {id: 2,
      content: 'Faire du Ménage',
      status: 'Terminé'},
      {id: 0,
        content: 'Aller voir Sébastien',
        status: 'En cours'},
      
       {id: 1,
          content: 'Se brosser les dents',
          status: 'En cours'},
      
       {id: 2,
            content: 'Faire du Ménage',
            status: 'Terminé'},
            {id: 0,
              content: 'Aller voir Sébastien',
              status: 'En cours'},
            
             {id: 1,
                content: 'Se brosser les dents',
                status: 'En cours'},
            
             {id: 2,
                  content: 'Faire du Ménage',
                  status: 'Terminé'}
];
export default class App extends React.Component {

   constructor(props) 
  {
    super(props);
    this.state = { taskList, isMenuTaskVisible:false, currentTask: {}, 
    isAddDialogVisible:false, idGenerator:0};
  }
/*  onPressButton = () =>{
    this.setState({ myText: 'Salut' });
    console.log('onPress');
  }*/

displayMenuTask = () => {
  alert('callback');
}
toggleMenuTaskVisibility = task => {
  let currentTask = task;
  if(this.state.isMenuTaskVisible){
    currentTask = {}
  }

  this.setState({isMenuTaskVisible:!this.state.isMenuTaskVisible, currentTask})
}
deleteCurrentTask = () => {
  const index = lodash.findIndex(this.state.taskList, {id: this.state.currentTask.id});
  const list = this.state.taskList;
  list.splice(index,1);
  this.setState({taskList: list, currentTask: {}});
  this.toggleMenuTaskVisibility();
}
changeStatut = () =>{
  const updateStatus = this.state.currentTask.status === TASK.doneStatus ? TASK.todoStatus : TASK.doneStatus;
  const updateTask = this.state.currentTask;

  updateTask.status = updateStatus;
  const index = lodash.findIndex(this.state.taskList, {id: this.state.currentTask.id});
  const updatedTaskList = this.state.taskList;
  updatedTaskList[index] = updateTask;
  this.setState({taskList: updatedTaskList, isMenuTaskVisible:false, currentTask:{}})
}

onCancelAddPrompt = () =>{   this.setState({isAddDialogVisible:false})}
onAddTask = value =>{
  const task = {
    id: this.state.idGenerator,
    content: value,
    status: TASK.todoStatus
  }
  this.setState({taskList: [...this.state.taskList, task], isAddDialogVisible:false, idGenerator: this.state.idGenerator+1});
}
displayAddTask = () =>{
  this.setState({isAddDialogVisible:true})
}

render(){
  return (
   // <View style={styles.container}>
   <View style= {{ flex:1 }}>
    <Header content="Liste de tâches" />
    <ScrollView>
    <TaskList  onPressCallBack = {this.toggleMenuTaskVisibility}   taskList = {this.state.taskList} />
    </ScrollView>
    <MenuTask  isVisible={this.state.isMenuTaskVisible} onDeleteCallBack={this.deleteCurrentTask}
     onDisapearCallback={this.toggleMenuTaskVisibility}
     onChangeStatusCallBack={this.changeStatut}
     />
  <AddTaskPrompt isVisible={this.state.isAddDialogVisible} onCancellCallback={this.onCancelAddPrompt} onSubmitCallBack={this.onAddTask}/>
    <ButtonAddTask  onPressCallback={this.displayAddTask}/>
   

    
    </View>
    //  <StatusBar style="auto" />
    //</View>
  );
}
}
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

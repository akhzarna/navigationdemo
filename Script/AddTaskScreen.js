
import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import COLORS from './Colors/color.js'
import DateTimePicker from '@react-native-community/datetimepicker';
import Constants from './Constants/Constants.js';

export default class AddTaskScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
          title:'',
          description:'',
          time:'',
          date:'',
          category:'',
          voicereminder:'',
        }
    }

    titleChangeAction=(text)=>{
      this.setState({title:text});
    }

    descriptionChangeAction=(text)=>{
      this.setState({description:text});
    }
    
    timeChangeAction=(text)=>{
      this.setState({time:text});
    }
    
    dateChangeAction=(text)=>{
      this.setState({date:text});
    }
    
    categoryChangeAction=(text)=>{
      this.setState({category:text});
    }
    
    voicereminderChangeAction=(text)=>{
      this.setState({voicereminder:text});
    }

    cancelAction=()=>{
      this.props.navigation.pop();
    }
    
    okAction=()=>{
      var addtaskObject={
        title:this.state.title,
        description:this.state.description,
        time:this.state.time,
        date:this.state.date,
        category:this.state.category,
        voicereminder:this.state.voicereminder,
        status:'pending',
        };
      Constants.addtaskArray.push(addtaskObject);
      console.log(Constants.addtaskArray);
      this.props.navigation.pop();
    }

    render(){
      return (
        <View style={{flex: 1}}>
        
        <ScrollView>
          <Text> Add Task </Text>

          <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}

              onChangeText={(text)=>this.titleChangeAction(text)}
              value={this.state.title}
              placeholder="Title"
            />

            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              
              onChangeText={(text)=>this.descriptionChangeAction(text)}
              value={this.state.description}
              placeholder="Description"
            />          

            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              
              onChangeText={(text)=>this.timeChangeAction(text)}
              value={this.state.time}
              placeholder="Time"
            />          


            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              
              onChangeText={(text)=>this.dateChangeAction(text)}
              value={this.state.date}
              placeholder="Date"
            />    


             <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              
              onChangeText={(text)=>this.categoryChangeAction(text)}
              value={this.state.category}
              placeholder="Choose Category"
            />          

             <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
              }}
              
              onChangeText={(text)=>this.voicereminderChangeAction(text)}
              value={this.state.voicereminder}
              placeholder="Voice Reminder"
            />                

            <View style={{flex:1,flexDirection:'row'}}>
            
            <TouchableOpacity style={{
              height: 20,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 0,
              flex:1,
              flexDirection:'row'
            }} onPress = {() => this.cancelAction()}>
             
             <Image
                   style={ {
                    width: 20, 
                    height: 20, 
                    marginLeft: 5
                  }}
                   source={require('./images/logo.png')}
                  />
                  <Text style={{marginLeft:5, fontWeight: 'bold', fontSize: 14}}>
                     Cancel
                  </Text>
                  
             </TouchableOpacity>

                 
             <TouchableOpacity style={{
                height: 20,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 0,
                flex:1,
                flexDirection:'row'
              }} onPress = {() => this.okAction()}>
                 
                 <Image
                   style={ {
                    width: 20, 
                    height: 20, 
                    marginLeft: 5
                  }}
                   source={require('./images/logo.png')}
                 />
                   <Text style={{marginLeft:5, fontWeight: 'bold', fontSize: 14}}>
                     Add Task
                   </Text>

               </TouchableOpacity>


            </View>

            </ScrollView>
    
        </View>
      );
    }

}

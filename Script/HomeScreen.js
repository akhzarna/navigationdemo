
import * as React from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import Constants from './Constants/Constants';
import Tts from 'react-native-tts';

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        // Optional
        Tts.setDefaultLanguage('en-IE');
        Tts.addEventListener('tts-start', event => console.log('start', event));
        Tts.addEventListener('tts-finish', event => console.log('finish', event));
        Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
    }
    
    componentDidMount(){
        Tts.stop();
        Tts.speak(Constants.addtaskArray[0].title);
        // Tts.speak('Nadeem Bhai Nazim PUCIT', {
        //     androidParams: {
        //       KEY_PARAM_PAN: -1,
        //       KEY_PARAM_VOLUME: 0.5,
        //       KEY_PARAM_STREAM: 'STREAM_MUSIC',
        //     },
        //   });
        }

    render(){
    return (
        <View style={{flex: 1}}>
          
          <View style={{marginBottom:10, marginTop:10, alignItems:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:18}}> Task Reminder App </Text>
          </View>
          
          <FlatList
                    
                    data={Constants.addtaskArray}
                    keyExtractor={(item, index) => index}
                    renderItem={({item,index}) =>
    
                    <View style={
                      {
                      flex:1, 
                      flexDirection:'row', 
                      height:60, 
                      backgroundColor:'#d9d9d9', 
                      shadowColor: "green", 
                      shadowOpacity: 0.8, 
                      shadowRadius: 12,
                      borderRadius: 2,
                      borderWidth: 1,
                      borderColor: "grey",
                      marginLeft:4,
                      marginRight:4,
                      marginTop:4,
                      marginBottom:4,
                      }
                      }>
                        <View style={{flex:2}}>
                            <Image source={require('./images/logo.png')}
                            style={{
                                height:50,
                                width:50,
                                borderRadius: 25,
                                borderWidth: 1,
                                borderColor: "green",
                                marginTop:5,
                                marginBottom:5,
                                marginLeft:5,
                                marginRight:5
                              }}
                            />
                            </View>
                          
                            <View style={{flex:8, flexDirection:'row'}}>
                              <View style={{flex:1, flexDirection:'column'}}>
                                <Text style={{marginLeft:5, marginRight:5, marginTop:5, marginBottom:5, fontWeight:'bold'}}> {item.title} </Text>
                                <Text style={{marginLeft:5, marginRight:5, marginTop:5, marginBottom:5, fontWeight:'bold'}}> {item.status} </Text>
                              </View>
                              <View style={{flex:1, flexDirection:'column'}}>
                                <Text style={{marginLeft:5, marginRight:5, marginTop:5, marginBottom:5,fontWeight:'bold'}}> {item.time} </Text>
                                <Text style={{marginLeft:5, marginRight:5, marginTop:5, marginBottom:5,fontWeight:'bold'}}> {item.date} </Text>
                              </View>
                            </View>
                        </View>
      
                  }

                    />

          <Button
            title="Add Task ( Reminder )"
            onPress={() => this.props.navigation.navigate('AddTaskScreen')}
          />
    
        </View>
      );
    }

}

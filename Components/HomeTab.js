import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './Button';
import { addBeatPack } from './FireBaseStore';

export default class HomeTab extends Component  {
    constructor(props){
        super(props)
        this.state = {
            beats:this.props.beats
        }
    }
    renderBeatList(beats){
      let  Newbeats = Object.entries(beats)
      console.log(Newbeats)
      return Newbeats.map((col, j) =>
      <View>
        <Text>{col}</Text>
        <Text>{Newbeats[col]}</Text>
      </View>  
      )
    //  for(let [name, url] of Object.entries(beats)){
    //                 return (<View style={this.styles.beatList}>
    //                 <Text>
    //                     {name}
    //                 </Text>
    //                 <Text>
    //                 {url}
    //                 </Text> 
    //                 </View>)
    //             }
    }
    render(){
        console.log(this.props.Beats)
        return (
            <View>
                {this.renderBeatList(this.props.Beats)}
                <Button onPress={() => addBeatPack('beats')}>add beat</Button>
            </View>
        )
    }

styles={
    beatList:{
        height:100,
        backgroundColor: 'skyblue',
        color:`white`,
        fontSize: `24px`
    }
}
}

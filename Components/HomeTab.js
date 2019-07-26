import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
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
      console.log(beats)
      return Object.entries(beats).map(pack =>
      <View>
        <Text style={{fontSize:20}}>{pack[1][0]}</Text>
        {Object.entries(pack[1][1]).map(beat =>{
            return (
                <Text
                onPress={() => {Linking.openURL(beat[1])}}
                style={{fontSize:10}}>
                {beat[0]}
                </Text>
            )
        })}
      </View>  
      )

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

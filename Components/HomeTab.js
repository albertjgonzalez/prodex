import React, { Component } from 'react';
import { ActivityIndicator, View, Text, Linking } from 'react-native';
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
    renderCurrentState() {
        {console.log(this.props.Beats)}
        if(Object.entries(this.props.Beats).length === 0 && this.props.Beats.constructor === Object){
            return <ActivityIndicator style={this.styles.beatList}/>
        }
        else{
            return (
                <View style={this.styles.beatList}>
                    {this.renderBeatList(this.props.Beats)}
                </View>
            )
        }
    }

    render() {
        return (
          <View>
            {this.renderCurrentState()}
          </View>
    
        );
      }

styles={
    beatList:{
        backgroundColor: `#EFEBE2`,
        color:`white`,
        fontSize: `24px`,
        justifyContent: 'center',
    }
}
}

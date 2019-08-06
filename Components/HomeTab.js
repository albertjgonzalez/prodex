import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Linking } from 'react-native';


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
        if(Object.entries(this.props.Beats).length === 0 && this.props.Beats.constructor === Object){
            return <ActivityIndicator style={styles.beatList}/>
        }
        else{
            return (
                <View style={styles.beatList}>
                    {this.renderBeatList(this.props.Beats)}
                </View>
            )
        }
    }

    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.Header}>My Beats</Text>
            {this.renderCurrentState()}
          </View>
    
        );
      }

    }
    const styles = StyleSheet.create({
        beatList:{
            backgroundColor: `#EFEBE2`,
            color:`white`,
            justifyContent: 'center',
        },
        container: {
            backgroundColor: `#EFEBE2`,
            flex:1
          },
          Header:{
              fontSize:50
          }
    })

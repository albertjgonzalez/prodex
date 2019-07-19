import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './Button';
import { addBeatPack } from './FireBaseStore';

export default class HomeTab extends Component  {
    constructor(props){
        super(props)
        this.state = {
            beats:[]
        }
    }
    componentWillMount(){
        this.setState({
            beats:this.props.beats
        })
        console.log(this.props.beats)
    }
    render(){
        return (
            <View Beats={this.props.beats}>
                
                <Text>

                </Text>
                <Button onPress={() => addBeatPack('beats')}>add beat</Button>
            </View>
        )
    }
}
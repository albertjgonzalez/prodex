import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './Button';
import { addBeatPack } from './FireBaseStore';

export default class HomeTab extends Component  {
    render(){
        return (
            <View>
                <Text>
                    This is the home tab
                </Text>
                <Button onPress={() => addBeatPack('beats')}>upload</Button>
            </View>
        )
    }
}
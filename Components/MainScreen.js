
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { Button } from './Button';
import { Logout } from './Logout';
import firebase from 'firebase';
import HomeTab from './HomeTab';

// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';


export default class MainScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      storageBucket:'gs://prodex.appspot.com/',
      beats:this.props.beats
      }
    }
    
    render() {
    return (
      <Container style={styles.container} email={this.props.email}>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Home">
            <HomeTab Beats={this.props.beats}/>
          </Tab>
          <Tab heading="Friends">
            {/* <Tab2 /> */}
            <Text>
              this is where users can see their friends
            </Text>
          </Tab>
          
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEBE2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, TabHeading, Tab, Tabs } from 'native-base';
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
      beats:this.props.beats,
      users:this.props.users
      }
    }
    
    render() {
    return (
      <Container style={styles.container} email={this.props.email}>
        <Header style={{backgroundColor: `#EFEBE2` }} hasTabs />
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'white' }}>
        <Tab 
            heading={'my music'}
            activeTextStyle={{ color: 'black', fontWeight: 'bold' }}
            textStyle={{ color: 'grey', fontWeight: 'bold' }}
            tabStyle={{backgroundColor: `#EFEBE2`}}
            activeTabStyle={{backgroundColor: '#AB0552',tabBarUnderlineStyle: 'black'}}
            >
            <HomeTab style={{backgroundColor: `#EFEBE2`}} Beats={this.props.beats}/>
          </Tab>
          <Tab 
            heading={'friends'}
            users={this.state.users}
            activeTextStyle={{ color: 'black', fontWeight: 'bold' }}
            textStyle={{ color: 'grey', fontWeight: 'bold' }}
            tabStyle={{backgroundColor: `#EFEBE2`}}
            activeTabStyle={{backgroundColor: '#AB0552',tabBarUnderlineStyle: 'black'}}
            >
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `#EFEBE2`,
    flex:1
  }
});

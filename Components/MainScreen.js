
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, TabHeading, Tab, Tabs } from 'native-base';
import FriendsTab from './FriendsTab';
import HomeTab from './HomeTab';
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
        <Header style={{backgroundColor: `#a56cc1` }} hasTabs />
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'white' }}>
        <Tab 
            heading={'my music'}
            activeTextStyle={{ color: 'black', fontWeight: 'bold' }}
            textStyle={{ color: 'grey', fontWeight: 'bold' }}
            tabStyle={{backgroundColor: `#cefff1`}}
            activeTabStyle={{backgroundColor: '#ace7ef',tabBarUnderlineStyle: 'black'}}
            >
            <HomeTab style={{backgroundColor: `#cefff1`}} Beats={this.props.beats}/>
          </Tab>
          <Tab 
            heading={'friends'}
            users={this.state.users}
            activeTextStyle={{ color: 'black', fontWeight: 'bold' }}
            textStyle={{ color: 'grey', fontWeight: 'bold' }}
            tabStyle={{backgroundColor: `#cefff1`}}
            activeTabStyle={{backgroundColor: '#ace7ef',tabBarUnderlineStyle: 'black'}}
            >
            <FriendsTab Users={this.props.users} friends={this.props.users}/>
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
    backgroundColor: `#a56cc1`,
    flex:1
  }
});

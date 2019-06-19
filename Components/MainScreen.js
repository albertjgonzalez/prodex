
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { Button } from './Button';
import { Logout } from './Logout';

// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';


export default class MainScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Home">
            {/* <Tab1 /> */}
            <Text>
              this is where users can see the beat packs they have
            </Text>
          </Tab>
          <Tab heading="Friends">
            {/* <Tab2 /> */}
            <Text>
              this is where users can see their friends
            </Text>
          </Tab>
          <Tab heading="Settings">
            {/* <Tab3 /> */}
            <Text>
              this is where users can change their settings
            </Text>
              <Button onPress={() => this.props.logout()}>Log Out</Button>
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
    backgroundColor: '#F5FCFF',
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

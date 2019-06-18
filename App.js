
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import MainScreen from './Components/MainScreen';
import * as firebase from 'firebase';
import { Input } from './Components/Input';
import { Button } from './Components/Button';


// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';


export default class App extends Component {
    state = {
      email:'',
      password:''
    }

    componentWillMount() {
      const firebaseConfig = {
        apiKey : 'AIzaSyB-_QP7PPOGYvgIvdKGKt9J1FKEi1uYhJM',
        authDomain: 'prodex.firebaseapp.com'
      }
    
      firebase.initializeApp(firebaseConfig)
    }
  render() {
    return (
      <View style={styles.container}> 
        {/* <MainScreen /> */}
        <Input placeholder={'Enter Email'}
               label={'Email'}
               onChangeText={ email => this.setState({ email })}
               value={this.state.email}
        />
        <Input placeholder={'Enter Password'}
               label={'Password'}
               onChangeText={ password => this.setState({ password })}
               value={this.state.password}
               secureTextEntry
        />
        <Button>Log In</Button>
      </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop:100
  },
});

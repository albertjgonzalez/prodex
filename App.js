
import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import MainScreen from './Components/MainScreen';
import * as firebase from 'firebase';
import { Input } from './Components/Input';
import { Button } from './Components/Button';
import { Login } from './Components/Login';




// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';


export default class App extends Component {
  state = {
    loginEmail:'',
    password:'',
    authenticating: false,
    displayName: '',
    email: '',
    emailVerified: '',
    photoURL: '',
    isAnonymous: '',
    uid: '',
    providerData: '',
    }



  componentWillMount() {
      const firebaseConfig = {
        apiKey : 'AIzaSyB-_QP7PPOGYvgIvdKGKt9J1FKEi1uYhJM',
        authDomain: 'prodex.firebaseapp.com'
  }
    
      firebase.initializeApp(firebaseConfig)

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // ...
          this.setState({
            authenticating: false,
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            isAnonymous: user.isAnonymous,
            uid: user.uid,
            providerData: user.providerData,
          })
        } else {
          // User is signed out.
          // ...
        }
      }.bind(this));
  }

  onPressSignIn(){
    // this.setState({
    //   authenticating: true
    // });
    Login(this.state.loginEmail,this.state.password)
  }

  renderCurrentState(){
if(this.state.authenticating){
  return(
    <View style={styles.form}> 
      <ActivityIndicator size='large'/>
    </View>
  )
}

return (
  <View style={styles.form}> 
    {/* <MainScreen /> */}
    <Input placeholder={'Enter Email'}
           label={'Email'}
           onChangeText={ email => this.setState({ loginEmail: email })}
           value={this.state.loginEmail}
    />
    <Input placeholder={'Enter Password'}
           label={'Password'}
           onChangeText={ password => this.setState({ password })}
           value={this.state.password}
           secureTextEntry
    />
    <Button onPress={() => this.onPressSignIn()}>Log In</Button>
  </View>
   
);
  }

  render() {
    return (
      <View style={styles.container}> 
       {this.renderCurrentState()}
      </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1
  }
});

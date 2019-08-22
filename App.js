import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image} from 'react-native';
import { Button } from 'native-base';
import MainScreen from './Components/MainScreen';
import * as firebase from 'firebase';
import { Input } from './Components/Input';
import { Login } from './Components/Login';
import FBDatabase from './Components/FBDatabase'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      creatingUser:false,
      loginEmail: 'ajgonzalez1114@gmail.com',
      password: 'emailemail22',
      authenticating: false,
      loggedIn: false,
      displayName: '',
      email: '',
      emailVerified: '',
      photoURL: '',
      isAnonymous: '',
      uid: '',
      providerData: '',
      beats:{},
      users:{}
    }
  }
  
  
  logout(){
    this.setState({ loggedIn:false, email:'', password:'' })
  }
  
  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyB-_QP7PPOGYvgIvdKGKt9J1FKEi1uYhJM",
      authDomain: "prodex.firebaseapp.com",
      databaseURL: "https://prodex.firebaseio.com",
      projectId: "prodex",
      storageBucket: "prodex.appspot.com",
      messagingSenderId: "359096778147",
      appId: "1:359096778147:web:f26c8b8833b7292f"
    };
    firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
  }
  
  
  Login(){
    firebase.auth().signInWithEmailAndPassword(this.state.loginEmail, this.state.password)
    .then((success)=>{
      this.setState({
        authenticating: false,
        loggedIn:true,
        uid:success.user.uid,
      })
      FBDatabase.getUsers(this.database,users=>{
        this.setState({users:users})
      })
      FBDatabase.getBeats(this.database,this.state.uid,beats => {
        this.setState({beats:beats})
      })
      
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      this.setState({
        authenticating: false
      });
      console.log(error);
    });
  }
  
  signUp(){
    firebase.auth().createUserWithEmailAndPassword(this.state.loginEmail, this.state.password)
    .then((success)=>{
      FBDatabase.addUser(this.database,this.state.displayName,this.state.loginEmail,success.user.uid,response=>{
        console.log(response)
      })
      this.setState({
        authenticating: false,
        creatingUser:false,
        loggedIn:true,
        uid: success.user.uid,
      })
    }).catch(function(error) {
      console.log(error)
      this.setState({
        authenticating: false
      });
    });
  }
  
  onPressSignIn() {
    this.setState({
      authenticating: true
    });
    this.Login();
  }
  
  onPressSignUp() {
    this.setState({
      authenticating: true
    });
    this.signUp();
  }
  
  createUser(){
    this.setState({
      creatingUser:true
    })
  }
  
  renderCurrentState() {
    const resizeMode = 'center';

    if (this.state.loggedIn) {
      return (
        <MainScreen users = {this.state.users} beats={this.state.beats} email={this.state.loginEmail} logout={()=>this.logout()}/>
        )
      }
      if (this.state.authenticating) {
        return (
          <View style={styles.form}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
    if (!this.state.loggedIn && !this.state.creatingUser) {
      return (
        <View style={styles.form}>
          
          <Input placeholder={'Enter Email'}
            label={'Email'}
            onChangeText={email => this.setState({ loginEmail: email })}
            value={this.state.loginEmail}
            />
          <Input placeholder={'Enter Password'}
            style={{fontSize:30}}
            label={'Password'}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry
            />

          <Button style={styles.submitButton} title='Log In' color='black' onPress={() => this.onPressSignIn()}>
            <Text style={{color:'white', fontSize:28, fontWeight:'bold'}}>Log In</Text>
          </Button>


          <Button style={styles.submitButton} title='Sign Up' color='black' onPress={() => this.createUser()}>
          <Text style={{color:'white', fontSize:28, fontWeight:'bold'}}>Sign Up</Text>
          </Button>
        </View>

);
}
if (!this.state.loggedIn && this.state.creatingUser) {
  return (
    <View style={styles.createUserForm}>
          {/* <MainScreen /> */}
          <Input placeholder={'Enter Name'}
            label={'Name'}
            onChangeText={name => this.setState({ displayName:name })}
            value={this.state.displayName}
          />
          <Input placeholder={'Enter Email'}
            label={'Email'}
            onChangeText={email => this.setState({ loginEmail: email })}
            value={this.state.loginEmail}
            />
          <Input placeholder={'Enter Password'}
            label={'Password'}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry
          />
          <Button style={styles.submitButton} title='Sign Up' color='black' onPress={() => this.onPressSignUp()}>
            <Text style={{color:'white', fontSize:28, fontWeight:'bold'}}>Sign Up</Text>
          </Button>
          
        </View>

      );
    }
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
    backgroundColor: `#EFEBE2`,
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  createUserForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  submitButton: {
    backgroundColor:'#AB0552',
    height:60,
    width: 250,
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }
});

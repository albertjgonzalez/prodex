import React, { Component } from 'react';
import { ActivityIndicator, Container, View, Item, Input, Icon, Button, Text } from 'native-base';
export default class FriendsTab extends Component {
    constructor(props){
        super(props)
        this.state={
            SearchTerm:'',
            users:this.props.Users,
            friends:[],
            updatedList:false
        }
    }

    componentWillMount(){
        if(!this.state.updatedList){
            let friends = []
            Object.entries(this.props.friends).map(friend=>{
                friends[friend[1][0]] = Object.entries(friend[1][1])[2][1]
            })
            this.setState({friends})
            console.log(friends)
            this.setState({updatedList:true})
        }
    }

    filterFriendList(term){
        console.log(term)
    }
    
    renderFriendList(friends){
        return Object.entries(friends).map(friend =>
        <View> 
            <Text style={{fontSize:20}}>{friend[1]}</Text>
            {console.log(friend)}
        </View>  
        )
  
      }
      renderCurrentState() {
          if(!this.state.updatedList){
              return <ActivityIndicator />
          }
          else{
              return (
                  <View>
                      {this.renderFriendList(this.state.friends)}
                  </View>
              )
          }
      }
  
      render() {
          return (
            <View style={styles.container}>
                <Container searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input 
                onChangeText={text =>this.filterFriendList(text)}
                placeholder="Search" 
                value={this.state.SearchTerm}/>
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
                <Text>My friends</Text>
              {this.renderCurrentState()}
      </Container>
            </View>
          );
        }
  
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `#EFEBE2`,
        flex:1
      }
}
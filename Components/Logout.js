import React from 'react';
import * as firebase from 'firebase';

export const Logout = () =>{
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        
      }, function(error) {
        // An error happened.
        alert(error)
      });
};
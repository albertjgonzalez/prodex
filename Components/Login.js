import React from 'react';
import * as firebase from 'firebase';

export const Login =  (email,password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorCode,errorMessage)
      });
};
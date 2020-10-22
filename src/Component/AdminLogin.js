import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useForm } from 'react-hook-form';
    // admin@planthaus.com // admin123
const AdminLogin = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).catch(function(error) {
        const errorMessage = error.message;
        alert(errorMessage)
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user)
          // redirect or do something
        } else {
          console.log('no one signed in')
        }
      });
    }  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="email" name="email" ref={register} />
        <input type="password" placeholder="password" name="password" ref={register} />
        <input type="submit" />
      </form>
    );
}
 
export default AdminLogin;

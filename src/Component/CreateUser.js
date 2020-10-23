import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
      <form onSubmit={handleSubmit(onSubmit)} style={{border: "2px solid black", padding: "5px"}}>
        <input type="text" placeholder="first_name" name="first_name" ref={register} style={{width: "50%"}}/>
        <input type="text" placeholder="last_name" name="last_name" ref={register} style={{width: "50%"}}/>
        <input type="text" placeholder="email" name="email" ref={register} style={{width: "50%"}}/>
        <input type="text" placeholder="username" name="username" ref={register} style={{width: "50%"}}/>
        <input type="text" placeholder="password" name="password" ref={register} style={{width: "50%"}}/>
        <input type="submit" style={{width: "50%"}}/>
      </form>
  );
}
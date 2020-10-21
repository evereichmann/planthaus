import React from 'react'
import { useForm } from 'react-hook-form';

const AdminLogin = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="username" name="username" ref={register} />
        <input type="text" placeholder="password" name="password" ref={register} />
        <input type="submit" />
      </form>
    );
}
 
export default AdminLogin;
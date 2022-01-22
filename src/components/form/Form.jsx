import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import './form.css';

const schema=yup.object({
  fullname:yup.string().required("fullname is required !"),
  username:yup.string().required("username is required !"),
  email:yup.string().email("enter valid email").required("email is required !"),
  password:yup.string().required("password is required !"),
  cpassword:yup.string().oneOf([yup.ref('password'),null],'passwords not matched').required(),
  age:yup.number().typeError("you must specify a number").min(18,"age must be 18+").max(99,"wohoo! do human live for century ?"),

})

export const Form = () => {


    const {register,handleSubmit, formState:{errors}}=useForm({
      resolver:yupResolver(schema),mode:'all'
    });
    const submitEvent=(data)=>{
      alert("form validation successfull. see console for result");
        console.log(data);
    }
  return( 
 
<>
    <div className="yupform">
     <h2>Form Validation</h2>
     {/* <h3>react-hook-form and yup</h3> */}
      <form onSubmit={handleSubmit(submitEvent)}>
        
        <label htmlFor="fullname">Fullname</label> <br />
        <input  className={errors.fullname && "inp"} type="text" {...register("fullname")}/> <br />
        <small>{errors.fullname?.message}</small> <br />
        
        <label htmlFor="username">Username</label> <br />
        <input type="text" className={errors.username && "inp"} {...register("username")} /> <br />
        <small>{errors.username?.message}</small> <br />
        
        <label htmlFor="email">Email</label> <br />
        <input type="text" className={errors.email && "inp"} {...register("email")} /> <br />
        <small>{errors.email?.message}</small> <br />
        

        <label htmlFor="password">Password</label> <br />
        <input  className={errors.password && "inp"} type="password" {...register("password")} /> <br />
        <small>{errors.password?.message}</small> <br />
       
       <label htmlFor="cpassword">Confirm Password</label> <br />
       <input type="password" className={errors.cpassword && 'inp'} {...register("cpassword")} /> <br />
       <small> {errors.cpassword?.message} </small> <br />

        <label htmlFor="age">Age</label> <br />
        <input className={errors.age && 'inp'} type="number" {...register("age")} /> <br />
        <small>{errors.age?.message}</small> <br />

         
        <button type="submit">Login</button>
      </form>

    
    </div>
  </>
  )
};

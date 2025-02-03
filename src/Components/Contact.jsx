import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';
function Contact() {
    const {
        register,
        handleSubmit,
    
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
             const userInfo={
                fullname:data.fullname,
             email:data.email,
             message:data.message
             }
             try {
                 await  axios.post("https://getform.io/f/awnnxnrb",userInfo);
                 toast.success("Your message has been sent");
                     
             } catch (error) {
                  console.log("error while registering ",error);
                  toast.error('Something went wrong!');
                  
             }
             
      }

  return (
    <div
       name="Contacts"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20   my-10'>
        <h1 className='text-3xl font-bold mb-3'>Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5  '>
            <form 
               onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/awnnxnrb" 
            //       method="POST"
            className='bg-slate-900  w-70 md:w-96 border-[2px] px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send your message</h1>
                <div className='flex  flex-col mb-4'>
                    <label className='block  '>Full Name</label>
                    <input className=' appearance-none border rounded-lg  py-2 px-3  leading-tight  focus:outline-none'
                     id="fullname"
                     type='text'
                     name='fullname'
                     placeholder='Enter your Full Name'
                     {...register("fullname", { required: true })} 
                     />
                    {errors.fullname && <span className='text-red-500'>This field is required</span>}
                </div>
                <div className='flex  flex-col mb-4'>
                    <label className='block  '>Email</label>
                    <input className=' appearance-none border rounded-lg  py-2 px-3  leading-tight  focus:outline-none'
                     id="email"
                     type='email'
                     name='email'
                     placeholder='Enter your email address'
                     {...register("email", { required: true })}
                     />
                      {errors.email && <span className='text-red-500'>This field is required</span>}
                    
                </div>
                <div className='flex  flex-col mb-4'>
                    <label className='block  '>Message</label>
                    <textarea className=' appearance-none border rounded-lg  py-2 px-3  leading-tight  focus:outline-none'
                     id="message"
                     type='text'
                     name='message'
                     placeholder='Enter your Query'
                     {...register("message", { required: true })}
                     />
                    {errors.message && <span className='text-red-500'>This field is required</span>}
                </div>
                <button type='submit' className='font-bold px-4 py-2 rounded border-[1px]  hover:scale-105'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact

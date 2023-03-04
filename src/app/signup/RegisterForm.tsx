import { Cities, Departments } from 'cities'
import '../globals.css'

// import { Cities, Departments } from 'UploadFiles'
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Header from '../../../components/Header';
import { Upload } from '../../../components/UploadFiles';

export interface User {
    // id: number,
        firstName:string,
        lastName:string,
        dateOfBirth: Date,
        email:string,
        password:string,
        confirmPassword:string,
        city:string,
        department:string,
        state:string,
        idCardNumber:string,
        // idCardFile?: File | string[],
        dateOfExpedition:Date,
    
}
const RegisterForm = () => {
    const [user, setUser] = useState<User>({
        firstName:"",
        lastName:"",
        dateOfBirth: new Date(),
        email:"",
        password:"",
        confirmPassword:"",
        city:"",
        department:"",
        state:"", // barrio
        idCardNumber:"",
        // idCardFile: undefined,
        // Address
        // phone number
        dateOfExpedition: new Date(),
    })
// console.log(user)
const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
const {name, value} = e.currentTarget 
  setUser({...user, [name]:value})
}

// const handleSelect = (e: ) =>{
//    e.preventDefault
//    const {name, value} = e.currentTarget
//    setUser({...user, [name]:value})
// }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      // Here firebase function will be called
        console.log(user)
    }
// Validations coming soon
  return (
    <>
    {/* <Header/> */}
    <div className='relative  p-6  '>
      <Image
      src='/registration-form-bg.png'
      alt='Register form bg'
    // height={auto}
    fill
      object-fit='contain'
      className='  opacity-40'
      />
    <div className='flex  md:w-[50%] xl:w-[50%]  flex-col shadow-2xl backdrop-blur-xl mb-4 border-2 border-gray-500 bg-gradient-to-b from-[#86A3F9]  to-gray-500 p-8  rounded-3xl '> 
      <h1 className='tracking-wider mb-2 text-white font-bold text-3xl text-center'>TRABAJA CON NOSOTROS</h1>
       <div className='my-4 flex bg-gray-300 rounded justify-center mx-auto items-center '>

       <Image
          src='/LOGO-LITIS-removebg.png'
          width={100}
          height={100}
          className=' justify-center flex mx-auto items-center '
          object-fit='contain'
          alt=''/>
          </div>
     <form 
     onSubmit={handleSubmit}
     className="w-72 sm:w-full max-w-lg ">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="transition duration-100
                        transform hover:scale-105 w-full  md:w-1/2 px-3 mb-6 md:mb-0 ">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 " htmlFor="grid-first-name">
        Nombres
      </label>
      <input
      name='firstName'
      value={user.firstName}
      onChange={handleChange}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3 transition duration-100
                        transform hover:scale-105">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Apellidos
      </label>
      <input 
       name='lastName'
      value={user.lastName}
      onChange={handleChange}
      className="transition duration-100
                        transform hover:scale-105
      appearance-none block w-full bg-gray-200 text-gray-700 border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
    
 <div className='px-3 mt-4 md:mb-0 transition duration-100
                        transform hover:scale-105'>
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
            Fecha de nacimiento
        </label>
        {/* <input 
        onChange={(text:FormEvent<HTMLInputElement>) => (setUser({...user, dateOfBirth:text.currentTarget.value}))}
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        type="date" placeholder='select a date' /> */}
         <DatePicker
         className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
         selected={user.dateOfBirth} onChange={(date: Date) => setUser({...user, dateOfBirth: date})} />
    </div>

    <div className="w-full mt-4 md:w-1/2 px-3 transition duration-100
                        transform hover:scale-105">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Email
      </label>
      <input 
        name='email'
      value={user.email}
      onChange={handleChange}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="tuemail@email.com"/>
    </div>
  </div>
  <div className="flex flex-wrap mb-6 transition duration-100
                        transform hover:scale-105">
    <div className="w-full  transition duration-100
                        transform hover:scale-105">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
        Contraseña
      </label>
      </div>
      <input 
       name='password'
      value={user.password}
      onChange={handleChange}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
    </div>
    <div className="w-full  transition duration-100
                        transform hover:scale-105">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
        Confirmar contraseña
      </label>
      <input 
       name='confirmPassword'
      value={user.confirmPassword}
      onChange={handleChange}
      className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
    </div>
  <div className="flex flex-wrap  mb-2">
    <div className="w-full md:w-1/3  mb-6 md:mb-0 transition duration-100
          transform hover:scale-105">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">
        Ciudad
      </label>
          <select
           name='city'
          value={user.city}
          
      onChange={handleChange}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          {Cities.map( city=>(
            <option 
            key={city.city}
              >{city.city}</option>
              ))}
        </select>
              </div>
    </div>
    <div className=" transition duration-100
                        transform hover:scale-105 w-full md:w-1/3  mb-6 md:mb-0">
      <label className="
      block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
        Departamento
      </label>

        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
         name='department'
      value={user.department}
      onChange={handleChange}
          >
          {Departments.map( department=>(
            <option 
            key={department.Department}
            placeholder=''
            >{department.Department}</option>
            ))}
        </select>

    </div>
    {/* <div className="w-full md:w-1/3  mt-2 mb-6 md:mb-0 transition duration-100
          transform hover:scale-105"> */}
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
        Numero de Cedula (*)
      </label>
      <input
       name='idCardNumber'
      value={user.idCardNumber}
      onChange={handleChange}
       className="appearance-none block w-full bg-gray-200 text-white  py-3 px-4 rounded" id="grid-zip" type="text" placeholder="123456789"/>
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
        Numero de Cedula (*)
      </label>
      <Upload/>



    <div className=' mt-2 mb-6 md:mb-0 transition duration-100
          transform hover:scale-105'>
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
            Fecha de expedicion
        </label>
          <DatePicker
         className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
         selected={user.dateOfExpedition} onChange={(date: Date) => setUser({...user, dateOfExpedition: date})} />
    </div>
<button

type="submit"
className='transition duration-100
          transform hover:scale-125 w-full text-center justify-center flex px-2 rounded-md mx-auto py-4 text-white font-bold bg-gradient-to-r from-[#0856c5] to-[#07bfff] tracking-widest hover:tracking-[6px]'>REGISTRARSE</button>
</form>
</div>
        </div>
            </>
  )
}

export default RegisterForm
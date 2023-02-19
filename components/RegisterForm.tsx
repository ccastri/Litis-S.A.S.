import { Cities, Departments } from 'cities'
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Header from './Header';


const RegisterForm = () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        dateOfBirth: new Date(),
        email:"",
        password:"",
        confirmPassword:"",
        city:"",
        state:"",
        idCard: "",
        dateOfExpedition:"",
    })
console.log(user.dateOfBirth)
    const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault
    }
  return (
    <>
    <Header/>
    <div className='relative  p-12  '>
      <Image
      src='/registration-form-bg.png'
      alt='Register form bg'
    // height={auto}
    fill
      object-fit='contain'
      className='  opacity-100'
      />
    <div className='flex items-center justify-center flex-col shadow-2xl backdrop-blur-sm mb-4 border-2 border-gray-200 bg-gradient-to-b from-gray-600  to-gray-300 opacity-100 p-8  rounded-tl-3xl rounded-br-3xl m-12 '> 
      <h1 className='tracking-wider mb-2 text-white font-bold text-3xl text-center'>TRABAJA CON NOSOTROS</h1>
       <div className='my-4 flex bg-gray-300 rounded justify-center mx-auto items-center h-16 w-26'>

       <Image
          src='/LOGO-LITIS-removebg.png'
          width={100}
          height={100}
          className=' justify-center mx-auto '
          object-fit='contain'
          alt=''/>
          </div>
     <form className="w-full max-w-lg ">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="transition duration-100
                        transform hover:scale-105 w-full  md:w-1/2 px-3 mb-6 md:mb-0 ">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 " htmlFor="grid-first-name">
        Nombres
      </label>
      <input 
      onChange={(text:FormEvent<HTMLInputElement>) => (setUser({...user, firstName:text.currentTarget.value}))}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3 transition duration-100
                        transform hover:scale-105">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        Apellidos
      </label>
      <input 
      onChange={(text:FormEvent<HTMLInputElement>) => (setUser({...user, lastName:text.currentTarget.value}))}
      className="transition duration-100
                        transform hover:scale-105
      appearance-none block w-full bg-gray-200 text-white border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
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
      onChange={(text:FormEvent<HTMLInputElement>) => (setUser({...user, email:text.currentTarget.value}))}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Doe"/>
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
      onChange={(text:FormEvent<HTMLInputElement>) => (setUser({...user, password:text.currentTarget.value}))}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
    </div>
    <div className="w-full  transition duration-100
                        transform hover:scale-105">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
        Confirmar contraseña
      </label>
      <input 
      onChange={(text:FormEvent<HTMLInputElement>) => (setUser({...user, confirmPassword:text.currentTarget.value}))}
      className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
    </div>
  <div className="flex flex-wrap  mb-2">
    <div className="w-full md:w-1/3  mb-6 md:mb-0 transition duration-100
          transform hover:scale-105">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">
        Ciudad
      </label>
          <select
          value={user.city}
          onChange={(text:ChangeEvent<HTMLSelectElement>) => (setUser({...user, city:text.target.value}))}
          className="t
          block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
        
          >
          {Departments.map( department=>(
            <option 
            key={department.Department}
            placeholder=''
            >{department.Department}</option>
            ))}
        </select>

    </div>
    <div className="w-full md:w-1/3  mt-2 mb-6 md:mb-0 transition duration-100
          transform hover:scale-105">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
        Cedula
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-white  py-3 px-4 rounded" id="grid-zip" type="text" placeholder="123456789"/>
    </div>

    <div className=' mt-2 mb-6 md:mb-0 transition duration-100
          transform hover:scale-105'>
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
            Fecha de expedicion
        </label>
        <input 
        className=' appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        type="date" placeholder='select a date' />
    </div>
<button className='transition duration-100
          transform hover:scale-125 w-full text-center justify-center flex px-2 rounded-md mx-auto py-4 text-white font-bold bg-gradient-to-r from-[#0856c5] to-[#07bfff] tracking-widest hover:tracking-[6px]'>REGISTRARSE</button>
</form>
</div>
        </div>
            </>
  )
}

export default RegisterForm
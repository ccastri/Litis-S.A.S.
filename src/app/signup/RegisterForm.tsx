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
        phoneNumber:string,
        department:string,
        city:string,
        neighborhood: string,
        email:string,
        idCardNumber:string,
        dateOfExpedition:Date,
        dateOfBirth: Date,
        password:string,
        confirmPassword:string,
        // state:string,
        // idCardFile?: File | string[],
    
}
interface SubmittedForm{
  isSubmitted:boolean
}
const RegisterForm = () => {
  const [onSubmit, setOnSubmit] = useState<boolean>(false)
    const [user, setUser] = useState<User>({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        department:"",
        city:"",
        neighborhood:"", 
        email:"",
        idCardNumber:"",
        dateOfExpedition: new Date(),
        dateOfBirth: new Date(),
        password:"",
        confirmPassword:"",
        // idCardFile: undefined,
        // Address
        // phone number
    })
// console.log(user)
const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
const {name, value} = e.currentTarget 
  setUser({...user, [name]:value})
}



    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      // Here firebase function will be called
      setOnSubmit(!onSubmit)


        console.log(user.firstName.length)
    }
// Validations coming soon
  return (
    <>
    {/* <Header/> */}
    <div className='relative my-12 p-6  '>
      <Image
      src='/registration-form-bg.png'
      alt='Register form bg'
    // height={auto}
    fill
      object-fit='contain'
      className='  opacity-40'
      />
    <div className='flex  mt-16 md:w-[50%] xl:w-[50%]  flex-col shadow-2xl backdrop-blur-sm mb-4   p-8   '> 
      <h1 className='tracking-wider mb-2 text-gray-700 font-bold text-3xl text-center'>AFILIATE CON NOSOTROS</h1>
       <div className='my-6 flex rounded justify-center mx-auto items-center '>

       <Image
          src='/LOGO-LITIS-removebg.png'
          width={150}
          height={150}
          className=' justify-center flex mx-auto items-center '
          object-fit='contain'
          alt=''/>
          </div>
     <form 
     onSubmit={handleSubmit}
     className="w-72 sm:w-full max-w-lg mx-auto ">
  <div className="flex flex-wrap mx-auto justify-center  mb-6">
    <div className="transition duration-100
                        transform hover:scale-105 w-full focus:text-xs text-md md:w-1/2 px-3 mb-6 md:mb-0 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-first-name">
        Nombres
      </label>
      <input
      name='firstName'
      required
      value={user.firstName}
      onChange={handleChange}
      className={`  w-full border-solid border-b border-black text-gray-700  ${onSubmit&&'border-red-500'}  py-3 px-4 mb-3 leading-tight focus:outline-none bg-slate-200 hover:bg-white`} id="grid-first-name" type="text" placeholder="Jane"/>
      {onSubmit ? 
        (user.firstName.length === 0) ? 
        (<p className="text-red-500 text-xs italic">Please fill out this field.</p>) :
      (<></>)  :
      ('')
         }
    </div>
    <div className="w-full md:w-1/2 px-3 transition duration-100
                        transform hover:scale-105">
      <label className="block uppercase tracking-wide  text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-last-name">
        Apellidos
      </label>
      <input 
       name='lastName'
       required
      value={user.lastName}
      onChange={handleChange}
      className="
      border-solid border-b border-black w-full  text-gray-700  py-3 px-4 leading-tight focus:outline-none bg-slate-200 hover:bg-white " id="grid-last-name" type="text" placeholder="Doe"/>
    
        </div>
      <div className="flex w-full items-center justify-center mx-auto my-8  mb-2">
    <div className="px-3 w-full md:w-1/3   md:mb-0 transition duration-100
          transform hover:scale-105">
      <label className="block uppercase tracking-wide text-gray-700 text-xs bg-white pt-2 pl-2" htmlFor="grid-city">
        Ciudad
      </label>
          <select
           name='city'
           value={user.city}
           
           onChange={handleChange}
           className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-slate-200 hover:bg-white" id="grid-state">
          {Cities.map( city=>(
            <option 
            key={city.city}
            >{city.city}</option>
            ))}
        </select>
              </div>
    </div>
    <div className=" transition duration-100
                        transform hover:scale-105 md:w-1/3 w-full px-3 my-8 md:mb-0">
      <label className="
      block uppercase tracking-wide text-gray-700 text-xs font-semibold  bg-white pt-2 pl-2" htmlFor="grid-state">
        Departamento
      </label>

        <select className="block appearance-none w-full  border-b border-black text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-slate-200 hover:bg-white" id="grid-state"
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
    <div className="transition duration-100
                        transform hover:scale-105 w-full focus:text-xs text-md md:w-1/2 px-3 mb-6 md:mb-0 ">
      <label className="block hover:text-xs text-md uppercase tracking-wide text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-first-name">
        Barrio
      </label>
      <input
      name='Neighborhood'
      required
      value={user.phoneNumber}
      onChange={handleChange}
      className={`  w-full border-solid border-b border-black text-gray-700  ${onSubmit&&'border-red-500'}  py-3 px-4 mb-3 leading-tight bg-slate-200 hover:bg-white`} id="grid-first-name" type="text" placeholder="Jane"/>
      {onSubmit ? 
        (user.firstName.length === 0) ? 
        (<p className="text-red-500 text-xs italic">Please fill out this field.</p>) :
      (<></>)  :
      ('')
         }
    </div>
 <div className='px-3 mt-4 md:mb-0 transition duration-100
                        transform hover:scale-105'>
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
            Fecha de nacimiento
        </label>
         
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
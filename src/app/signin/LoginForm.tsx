import { Cities, Departments } from 'cities'
import '../globals.css'

// import { Cities, Departments } from 'UploadFiles'
import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Header from '../../../components/Header';
import { Upload } from '../../../components/UploadFiles';
import { PersonalDataForm } from 'Personal-data';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, SubmitHandler } from "react-hook-form";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Cookies from 'js-cookie';



const baseURL = 'http://localhost:5000/api/v1/auth/login'

export interface Login {
        // username:string,
        email:string,
        password:string,
    
      }
      
      const RegisterForm = () => {
        // ! Button is pressed (twice) idk what's going on jaja
        const [isPersonalDataClicked, setIsPersonalDataClicked] = useState<boolean>(true)
        const [isSubmit, setIsSubmit] = useState<boolean>(false)
        const [user, setUser] = useState<Login>({ 
          email:"",
          password:"",
          // username:"",
          // idCardNumber:"",
          // dateOfExpedition: new Date(),
          // dateOfBirth: new Date(),
          // idCardFile: undefined,
          // Address
        // phone number
    })
// ! UseForm and WTForm integration:
  const { register, handleSubmit, control, formState:{errors} } = useForm({
    defaultValues: {
        email: user.email,
        // username: user.username,
        password: user.password,
        
    }
  });

const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
const {name, value} = e.currentTarget 
setUser({...user, [name]:value})
}
// const jwt_token = Cookies.get('jwt_token')
// useEffect(() => {
// }, [jwt_token])

const onSubmit: SubmitHandler<Login> = async (data) => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)
  axios.post(baseURL, data, {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization:`Bearer ${jwtToken}`
    }
  }).then((response:any) => {
    console.log(response.data);
    router.push('/dashboard')
  }).catch((error:any) => {
    console.error(error);
  });
  
  
}
const router = useRouter()
  return (
    <>
    {/*//! <Header/> */}
    
    <div className='relative my-12 p-6 text-slate-700  bg-sky-200 opacity-70 '>
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
          {/* //! Wrapper */}
          {/* {!isPersonalDataClicked &&(
          <div 
          className='flex space-x-2 rounded justify-between p-4 hover:text-white bg-sky-100 border-2 hover:bg-blue-500 border-sky-700 items-center'
          >
            <h1 className='font-bold'>Haz click aqui para empezar a completar el formulario con tus datos personales</h1>
            <KeyboardArrowDownIcon
            onClick={()=>setIsPersonalDataClicked(!isPersonalDataClicked)}
             className='border-2 rounded border-sky-500 hover:text-slate-700'/>
            </div>)} */}

   {/* //!          Formulary */}
     <form 
     onSubmit={handleSubmit(onSubmit)}
     className={`${!isPersonalDataClicked && 'hidden'} w-72 sm:w-full max-w-lg mx-auto `}
     >
      <div className="flex flex-wrap mx-auto justify-center  mb-2">
       {/* //! */}
        {/* <div className="w-full md:w-1/2 px-3 transition duration-100 
                        transform hover:scale-105 hover:underline rounded text-md hover:decoration-sky-600 font-semibold hover:font-normal mb-2">
          <label className="block uppercase tracking-wide  text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-last-name">
            Nombre de usuario
          </label>
          <input 
            {...register("username", { 
              required: "Nombre de usuario es requerido. al menos 8 caracteres: mayusculas, minusculas, numeros un caracter especial",
              minLength: 8,
              maxLength:16,
              }
            )}
            id='username'
            value={user.username}
            onChange={handleChange}
            className="border-solid border-b border-black w-full  text-gray-700 font-normal py-3 px-4 leading-tight focus:outline-none bg-slate-200 hover:bg-white" 
            type="text"
            placeholder="Tu_usuario123"
            /> 
          
        </div>
            {errors.username?.message && (<span className='text-red-500 font-bold m-2'>{errors.username?.message}</span>)}
            {errors.username && errors.username?.type === 'minLength' && <span className='text-red-500 font-bold'>Nombre de usuario demasiado corto</span>}
            {errors.username && errors.username?.type === 'maxLength' && <span className='text-red-500 font-bold'>Nombrede usuario demasiado largo</span>} */}
    <div className="w-full md:w-1/2 px-3 transition duration-100   
                        transform hover:scale-105 hover:underline rounded text-md hover:decoration-sky-600 font-semibold hover:font-normal mb-2">
      <label className="block uppercase tracking-wide  text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-last-name">
        Email
      </label>
      <input 
          {...register("email", { 
            required: "Por favor ingrese su direccion de correo electrónico",
            minLength:15, 
            maxLength:50,  
            pattern: {
              value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email tine que ser un formato valido'
            }             
            })
          }
          id='email'
          value={user.email}
          onChange={handleChange}
          className="
          border-solid border-b border-black w-full  text-gray-700 font-normal py-3 px-4 leading-tight focus:outline-none bg-slate-200 hover:bg-white" type="text" placeholder="Doe"
          />
          
        </div>
{/* //!  Errores email */}
        {errors.email?.message && (<p className='text-red-500 font-bold'>{errors.email?.message}</p>)}
        {errors.email && errors.email.type === 'minLength' && (<p className='text-red-500 font-bold'>Email demasiado corto</p> )}
        {errors.email && errors.email.type === 'maxLength' && (<p className='text-red-500 font-bold'>Email demasiado largo</p> )}
      
    <div className="w-full md:w-1/2 px-3 transition duration-100   
                        transform hover:scale-105 hover:underline rounded text-md hover:decoration-sky-600 font-semibold hover:font-normal">
      <label className="block uppercase tracking-wide  text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-last-name">
        Contraseña
      </label>
      <input 
        {...register("password", {
            required: "Por favor ingrese una contraseña valida",
            minLength:2, 
            maxLength:15, 
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
              message: 'Al menos 8 caracteres: mayusculas, minusculas, numeros un caracter especial'
            }
          })
        }
        id='password'
        value={user.password}
        onChange={handleChange}
        className="
        border-solid border-b border-black w-full  text-gray-700 font-normal py-3 px-4 leading-tight focus:outline-none bg-slate-200 hover:bg-white" 
        type="text" 
        placeholder="Doe"
      />
    </div>
      {errors.password?.message && (<span className='text-red-500 font-bold mx-2 p-2'>{errors.password?.message}</span>)}
      {errors.password && errors.password?.type === 'minLength' && <span className='text-red-500 font-bold'>Contraseña demasiado corta</span>}
      {errors.password && errors.password?.type === 'maxLength' && <span className='text-red-500 font-bold'>Contraseña demasiado larga</span>}
   
    {/* <div className='my-auto pt-4 mt-2 hover:text-slate-900'>
    
    <KeyboardArrowUpIcon    sx={{fontSize: '40px'}}
    className='border-2 flex  rounded w-10 h-10flex-row items-center justify-center mx-auto border-sky-700'
      onClick={()=>setIsPersonalDataClicked(!isPersonalDataClicked)} />
      <p className='m-auto my-0 p-0 text-slate-400 leading-relaxed font-bold tracking tracking-wide '>cerrar</p>
    </div> */}
</div>
{/* <Upload/> */}
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


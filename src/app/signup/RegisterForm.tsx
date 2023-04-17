import { Cities, Departments } from 'cities'
import '../globals.css'

// import { Cities, Departments } from 'UploadFiles'
import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image';

import Header from '../components/Header';
import { Upload } from '../components/UploadFiles';
import { PersonalDataForm } from 'Personal-data';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, SubmitHandler } from "react-hook-form";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const baseURL = 'http://localhost:5000/api/v1/auth/register'

export interface User {
    // id: number,
        firstName:string,
        lastName:string,
        phoneNumber:string,
        department:string,
        username:string,
        email:string,
        password:string,
        confirmPassword:string,
        city:string,
        neighborhood: string,
        tos_is_clicked: boolean,
        // idCardNumber:string,
        // dateOfExpedition:Date,
        // dateOfBirth: Date,
        // state:string,
        // idCardFile?: File | string[],
    
}

const RegisterForm = () => {
  // ! Button is pressed (twice) idk what's going on jaja
  const [isPersonalDataClicked, setIsPersonalDataClicked] = useState<boolean>(true)
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [user, setUser] = useState<User>({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        department:"",
        city:"",
        neighborhood:"", 
        email:"",
        username:"",
        password:"",
        confirmPassword:"",
        tos_is_clicked: false
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
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        username: user.username,
        password: user.password,
        department: user.department,
        confirmPassword: user.confirmPassword,
        city: user.city,
        neighborhood: user.neighborhood,
        tos_is_clicked: user.tos_is_clicked
        // idCardNumber: user.idCardNumber,
        // dateOfExpedition: user.dateOfExpedition,
        // dateOfBirth: user.dateOfBirth,
    }
  });

const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
const {name, value} = e.currentTarget 
  setUser({...user, [name]:value})
}

const onSubmit: SubmitHandler<User> = async (data) => {

        axios.post(baseURL, data, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
  },
   withCredentials: true //
}).then((response:any) => {
  console.log(response.data);
}).catch((error:any) => {
  console.error(error);
});

        
    }
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
        <div className="transition duration-100
                        transform hover:scale-105 w-full rounded-xl text-md md:w-1/2 px-3 mb-2 md:mb-0 hover:underline hover:decoration-sky-600 font-semibold hover:font-normal ">
          <label className="block uppercase tracking-wide text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-first-name">
            Nombres
          </label>
          <input
            {...register("firstName", { 
            required: "Nombre es requerido",
            minLength:2,
            maxLength: 20 
              }
            )}
            id='first_name'
            value={user.firstName}
            onChange={handleChange}
            className={`  w-full border-solid border-b border-black text-gray-700  ${isSubmit&&'border-red-500'}  py-3 px-4 leading-tight focus:outline-none bg-slate-200 hover:bg-white font-normal`} 
            type="text"
            placeholder="Jane"
          />
        </div>
          {errors.firstName?.message && (<span className='text-red-500 font-bold'>{errors.firstName?.message}</span>)}
          {errors.firstName && errors.firstName?.type === 'minLength' && <span className='text-red-500 font-bold'>Nombre demasiado corto</span>}
          {errors.firstName && errors.firstName?.type === 'maxLength' && <span className='text-red-500 font-bold'>Nombre demasiado largo</span>}
        <div className="w-full md:w-1/2 px-3 transition duration-100 mb-2  
                        transform hover:scale-105 hover:underline rounded text-md hover:decoration-sky-600 font-semibold hover:font-normal">
          <label className="block uppercase tracking-wide  text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-last-name">
            Apellidos
          </label>
          <input 
            {...register("lastName", { 
              required: "Por favor digite su apellido",
              minLength:2,
              maxLength:20,
              }
            )}
            id='last_name'
            value={user.lastName}
            onChange={handleChange}
            className="border-solid border-b border-black w-full  text-gray-700 font-normal py-3 px-4 leading-tight focus:outline-none bg-slate-200 hover:bg-white" 
            type="text"
            placeholder="Doe"
            /> 
          
        </div>
            {errors.lastName?.message && (<span className='text-red-500 font-bold'>{errors.lastName?.message}</span>)}
            {errors.lastName && errors.lastName?.type === 'minLength' && <span className='text-red-500 font-bold'>Nombre demasiado corto</span>}
            {errors.lastName && errors.lastName?.type === 'maxLength' && <span className='text-red-500 font-bold'>Nombre demasiado largo</span>}
         <div className="w-full md:w-1/2 px-3 transition duration-100 mb-2  
                        transform hover:scale-105 hover:underline rounded text-md hover:decoration-sky-600 font-semibold hover:font-normal">
          <label className="block uppercase tracking-wide  text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-last-name">
            Numero de telefono
          </label>
          <input 
            {...register("phoneNumber", { 
              required: "Por favor digite su numero de telefono",
              minLength:10,
              maxLength:10,
            }
            )}
            id='phoneNumber'
            value={user.phoneNumber}
            onChange={handleChange}
            className="border-solid border-b border-black w-full  text-gray-700 font-normal py-3 px-4 leading-tight focus:outline-none bg-slate-200 hover:bg-white" 
            type="text"
            placeholder="Doe"
            /> 
          
        </div>
            {errors.phoneNumber?.message && (<span className='text-red-500 font-bold'>{errors.phoneNumber?.message}</span>)}
            {errors.phoneNumber && errors.phoneNumber?.type === 'minLength' && <span className='text-red-500 font-bold'>Nombre demasiado corto</span>}
            {errors.phoneNumber && errors.phoneNumber?.type === 'maxLength' && <span className='text-red-500 font-bold'>Nombre demasiado largo</span>}
        <div className="w-full md:w-1/2 px-3 transition duration-100 
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
            {errors.username && errors.username?.type === 'maxLength' && <span className='text-red-500 font-bold'>Nombrede usuario demasiado largo</span>}
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
    <div className="w-full md:w-1/2 px-3 transition duration-100   
                        transform hover:scale-105 hover:underline rounded text-md hover:decoration-sky-600 font-semibold hover:font-normal">
      <label className="block uppercase tracking-wide  text-gray-700 text-xs pt-2 pl-2 bg-white" htmlFor="grid-last-name">
        Confirmar contraseña
      </label>
      <input 
        {...register("confirmPassword", {
            required: "Por favor ingrese una contraseña valida",
            minLength:8, 
            maxLength:16, 
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
              message: 'Al menos 8 caracteres: mayusculas, minusculas, numeros un caracter especial'
            }
          })
        }
        id='passconfirmPasswordword'
        value={user.confirmPassword}
        onChange={handleChange}
        className="
        border-solid border-b border-black w-full  text-gray-700 font-normal py-3 px-4 leading-tight focus:outline-none bg-slate-200 hover:bg-white" 
        type="password" 
        placeholder="Doe"
      />
    </div>
      {errors.password?.message && (<span className='text-red-500 font-bold mx-2 p-2'>{errors.confirmPassword?.message}</span>)}
      {errors.confirmPassword && errors.confirmPassword?.type === 'minLength' && <span className='text-red-500 font-bold'>Contraseña demasiado corta</span>}
      {errors.password && errors.confirmPassword?.type === 'maxLength' && <span className='text-red-500 font-bold'>Contraseña demasiado larga</span>}
    <div className="flex w-full items-center justify-center mx-auto  my-2">
    <div className="px-3 w-[92%] md:w-1/3 rounded  md:mb-0 transition duration-100
          transform hover:scale-105 text-gray-700 text-xs bg-white pt-2 pl-2 hover:underline text-md hover:decoration-sky-600 font-semibold hover:font-normal">
      <label className="block uppercase tracking-wide " htmlFor="grid-city">
        Ciudad
      </label>
          <select
            {...register("city", { 
              required: "Seleccione su ciudad de residencia",
              }
            )}
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
    {errors.city?.message && (<span className='text-red-500 font-bold mx-2 p-2'>{errors.city?.message}</span>)}
    <div className=" transition duration-100
                        transform hover:scale-105 w-[92%] md:w-1/3 rounded  px-3 mt-6 mb-2 md:mb-0 text-xs bg-white pt-2 pl-2 hover:underline text-md hover:decoration-sky-600 font-semibold hover:font-normal">
      <label className="
      block uppercase tracking-wide text-gray-700 text-xs font-semibold  bg-white pt-2 pl-2" htmlFor="grid-state">
        Departamento
      </label>

        <select 
          className="block appearance-none w-full  border-b border-black text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-slate-200 hover:bg-white" id="grid-state"
          // name='department'
          {...register("department", { 
            required: "Seleccione su departamento de residencia",
            }
          )}
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
        {errors.department?.message && (<span className='text-red-500 font-bold mx-2 p-2'>{errors.department?.message}</span>)}
    <div className= {` transition duration-100
                        transform hover:scale-105 w-full focus:text-xs text-md md:w-1/2 px-3 md:mb-0 `}>
      <label className= {`block hover:text-xs text-md uppercase tracking-wide text-gray-700 text-xs pt-2 pl-2 bg-white  ${errors.neighborhood &&'border-x-2 border-red-500 border-t-2 text-red-500 font-semibold '}`} htmlFor="grid-first-name">
        Barrio
      </label>
      <input
        {...register("neighborhood", { 
          required: "Por favor digite el barrio donde reside",
            minLength:2,
            maxLength:15,
          }
        )}
      value={user.neighborhood}
      onChange={handleChange}
      className={`   ${errors.neighborhood &&'border-x-2 border-red-500 border-b-2'} border-solid border-b border-black w-full  text-gray-700 font-normal py-3 px-4 leading-tight focus:outline-none bg-slate-200 hover:bg-white`} id="grid-first-name" type="text" placeholder="Jane"/>
    </div>
      {errors.neighborhood?.message && (<span className='text-red-500 text-xs font-bold mx-2 p-2'>{errors.neighborhood?.message}</span>)}
      {errors.neighborhood && errors.neighborhood?.type === 'minLength' && <span className='text-red-500 text-xs font-bold'>Nombre del barrio demasiado corta</span>}
      {errors.neighborhood && errors.neighborhood?.type === 'maxLength' && <span className='text-red-500 text-xs font-bold'>Nombre del barrio demasiado larga</span>}
    <div className='border-2 w-full flex flex-wrap border-slate-900'>
    <div className="flex transition duration-100
                        transform hover:scale-105 w-full focus:text-xs text-md md:w-1/2 md:mb-0 ">
    <label className= {`block hover:text-xs text-md uppercase tracking-wide text-gray-700 text-xs pt-2 pl-2 bg-white  ${errors.neighborhood &&'border-x-2 border-red-500 border-t-2 text-red-500 font-semibold '}`} htmlFor="grid-first-name">
      Acepto la politica de terminos y condiciones
      </label>

      <input
      // name='Neighborhood'
      {...register('tos_is_clicked')}
      // value="user.isBenefeciary"
      onChange={handleChange}
      className={` text-gray-700   mb-3 leading-tight bg-slate-200 hover:bg-white`} id="grid-first-name" type="checkbox" placeholder="Jane" /> weed
    </div>
    </div>
    {/*
    <div className="transition duration-100 border-2 border-slate-900
                        transform hover:scale-105 w-full focus:text-xs text-md md:w-1/2 md:mb-0 ">
        <input
      name='isBeneficiary'
      
      value="user.isBenefeciary"
      onChange={handleChange}
      className={` text-gray-700  ${isSubmit&&'border-red-500'}   mb-3 leading-tight bg-slate-200 hover:bg-white`} 
      id="grid-first-name" 
      type="checkbox" 
      placeholder="Jane" />
    </div>
    </div> */}
    <div className='my-auto pt-4 mt-2 hover:text-slate-900'>
    
    <KeyboardArrowUpIcon    sx={{fontSize: '40px'}}
    className='border-2 flex  rounded w-10 h-10flex-row items-center justify-center mx-auto border-sky-700'
      onClick={()=>setIsPersonalDataClicked(!isPersonalDataClicked)} />
      <p className='m-auto my-0 p-0 text-slate-400 leading-relaxed font-bold tracking tracking-wide '>cerrar</p>
    </div>
</div>
<Upload/>
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


{/* //  <div className='px-3 mt-4 md:mb-0 transition duration-100
//                         transform hover:scale-105'>
//         <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
//             Fecha de nacimiento
//         </label>
         
//          <DatePicker */}
{/* //          className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//          selected={user.dateOfBirth} onChange={(date: Date) => setUser({...user, dateOfBirth: date})} />
//     </div> */}

{/* //     <div className="w-full mt-4 md:w-1/2 px-3 transition duration-100
//                         transform hover:scale-105">
//       <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
//         Email
//       </label>
//       <input  */}
{/* //         name='email'
//       value={user.email}
//       onChange={handleChange}
//       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="tuemail@email.com"/>
//     </div> */}
{/* //   </div> */}
{/* //   <div className="flex flex-wrap mb-6 transition duration-100
//                         transform hover:scale-105">
//     <div className="w-full  transition duration-100
//                         transform hover:scale-105">
//       <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
//         Contraseña
//       </label>
//       </div>
//       <input 
//        name='password'
//       value={user.password}
//       onChange={handleChange}
//       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
//     </div>
//     <div className="w-full  transition duration-100
//                         transform hover:scale-105">
//       <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
//         Confirmar contraseña
//       </label>
//       <input 
//        name='confirmPassword'
//       value={user.confirmPassword}
//       onChange={handleChange}
//       className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
//     </div>

//     {/* <div className="w-full md:w-1/3  mt-2 mb-6 md:mb-0 transition duration-100
//           transform hover:scale-105"> */}
//       <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
//         Numero de Cedula (*)
//       </label>
//       <input
//        name='idCardNumber'
//       value={user.idCardNumber}
//       onChange={handleChange}
//        className="appearance-none block w-full bg-gray-200 text-white  py-3 px-4 rounded" id="grid-zip" type="text" placeholder="123456789"/>
//       <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
//         Numero de Cedula (*)
//       </label>
//       <Upload/>



//     <div className=' mt-2 mb-6 md:mb-0 transition duration-100
//           transform hover:scale-105'>
//         <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
//             Fecha de expedicion
//         </label>
//           <DatePicker
//          className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//          selected={user.dateOfExpedition} onChange={(date: Date) => setUser({...user, dateOfExpedition: date})} />
//     </div> */}
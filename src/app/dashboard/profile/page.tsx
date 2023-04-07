'use client'
import {useState, useEffect} from 'react'
import '../../globals.css'
import axios from 'axios';
import { User } from '@/app/signup/RegisterForm';
// import RegisterForm from './RegisterForm'


const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1/auth/dashboard',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});
const Profile = () => {
  const [userIsAuth, setUserIsAuth] = useState({})
  
  // useEffect(() => {
    const getUser= async (data:any) => {
      
      
      // const headers = { Authorization: `Bearer ${data.user_jwt_token}` };
        api.get('/profile/1' ).then((response:any) => {
          console.log(response.data);
          setUserIsAuth(response.data)
        }).catch((error:any) => {
          console.error(error);
        });
      }
  // }, [data])
  return (
    <div className='px-2 w-full h-screen z-999 justify-center text-black items-center '>
    

      <h1>holi</h1>
   
</div>
  )
}

export default Profile


// ! Aqui vamos a hacer el rendering del perfil del usuario despues e las validaciones de Marshmallow

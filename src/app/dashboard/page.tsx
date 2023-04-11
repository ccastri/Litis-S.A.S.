'use client'
import {useState, useEffect} from 'react'
import '../globals.css'
import axios from 'axios';
import { User } from '@/app/signup/RegisterForm';
// import cookie from 'js-cookie';
import cookie from 'cookie';
// import RegisterForm from './RegisterForm'


const baseURL= 'http://localhost:5000/api/v1/auth/dashboard/profile/31'
// const jwtToken = Cookies.get('jwt_token');

const Profile = ({token}:any) => {
  console.log(token)
  // const Profile = ({firstname}) => {
    const [userIsAuth, setUserIsAuth] = useState({})
    
    // const getUser= async (jwtToken: String) => {
      // console.log(jwtToken)
      // useEffect(() => {
      //   const fetchUser = async () => {
      //     try {
            // const jwt_token = cookie.get('jwt_token'); 
            
//             const response = await axios.get(baseURL,
//             { 
//               withCredentials: true, 
//               headers: {
//               'Authorization': `Bearer ${jwt_token}`,
//               'Content-Type': 'application/json',
//               'Access-Control-Allow-Origin': '*',
//               },  
//             });
//             const user = response.data;
//             console.log(user);
//             setUserIsAuth(user);
//             return user
//     } catch (error) {
//       console.log('Error al obtener el usuario', error);
//       // puedes manejar el error de alguna manera, como lanzar una alerta o retornar un valor por defecto
//       return null
//     }
//   };

// const timer = setTimeout(() => {
//     fetchUser();
//   }, 1000);

//   return () => clearTimeout(timer);
// }, []);
// Aquí, se define una función asíncrona fetchUser que realiza la solicitud a la API y maneja los errores. Luego se llama a esta función dentro de useEffect, que se ejecutará cuando cambie el valor de jwtToken. También se ha añadido la dependencia jwtToken para que useEffect se vuelva a ejecutar si cambia el token.







      
        return (
      
    <div className='px-2 w-full h-screen z-999 justify-center text-black items-center '>
    

      <h1>Hi! there</h1>
   

    </div>
  )
}

export default Profile
// export async function getServerSideProps(context:any) {
//   const token = getToken(context.req);
//   const res = await axios.get(`http://localhost:5000/users/31`);
//   const user = res.data;
//   return {
//     props: { user }
//   };
// }

export async function getServerSideProps(context:any) {
  const { req } = context;
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt_token;
  console.log(token)
  return { props: { token } };
}
// 
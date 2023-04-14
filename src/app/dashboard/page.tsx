'use client'
import {useState, useEffect} from 'react'
import '../globals.css'
import axios from 'axios';
import { User } from '@/app/signup/RegisterForm';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BeenhereIcon from '@mui/icons-material/Beenhere'; 


const baseURL= 'http://localhost:5000/api/v1/auth/dashboard/profile/72'
// const jwtToken = Cookies.get('jwt_token');
const SECRET_KEY= 'A26nku4vi9YK4PXz1wDOxR/9uvH1WU2t73rMg2dOGaY='

const Profile = () => {
  // console.log(token)
  // const Profile = ({firstname}) => {
    interface UserLogged {
      username: string;
      email: string
      phoneNumber: string
      city: string
      memberSince: string

    }
    const [userIsAuth, setUserIsAuth] = useState<UserLogged>({
      username:"",
      email:"",
      phoneNumber: "",
      city: "",
      memberSince: "",


    })
    const [userIsClicked, setUserIsClicked] = useState<Boolean>(false)
    
    // const getUser= async (jwtToken: String) => {
      useEffect(() => {
        const jwt_token = Cookies.get('jwt_token');
        const fetchUser = async () => {
          try {
            // console.log(jwt_token)
            
            const response = await axios.get(baseURL,
              { 
                withCredentials: true, 
                headers: {
                  Authorization: `Bearer ${jwt_token}`,
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                },  
              });
              const user = response.data;
              if (jwt_token) {
                // Decodifica el token JWT
                try {
              //  const header, payload, signature = jwt_token.split('.') 
              //  console.log(jwt_token);
               const stringToken = JSON.stringify(jwt_token)
              //  const header = parts[0]
              //  const payload = parts[1]
              //  console.log(payload)
              setUserIsAuth(user)
              //  const payloadString = JSON.stringify(payload);
               console.log(stringToken)
            const decoded = jwt.decode(jwt_token); // Reemplaza 'TU_SECRETO' con el secreto real usado para firmar el token JWT
//  ! No funciona por ese error de mierda 'Error al decodificar el token JWT TypeError: Right-hand side of 'instanceof' is not an object'
            // const verified = jwt.verify(jwt_token, SECRET_KEY); // Reemplaza 'TU_SECRETO' con el secreto real usado para firmar el token JWT
            // console.log(decoded);
            // El objeto 'decoded' ahora contiene la información decodificada del token JWT, como los datos del usuario, la fecha de expiración, etc.
          } catch (error) {
            console.log('Error al decodificar el token JWT', error);
            // Maneja el error de alguna manera, como mostrar un mensaje de error al usuario
          }
        } else {
          console.log('El token JWT no está presente');
          // Maneja el caso cuando el token JWT no está presente, por ejemplo, redirigiendo al usuario a la página de inicio de sesión
        }
            console.log(user);
            return user
    } catch (error) {
      console.log('Error al obtener el usuario', error);
      // puedes manejar el error de alguna manera, como lanzar una alerta o retornar un valor por defecto
      return null
    }
  };
    fetchUser();
}, []);
// Aquí, se define una función asíncrona fetchUser que realiza la solicitud a la API y maneja los errores. Luego se llama a esta función dentro de useEffect, que se ejecutará cuando cambie el valor de jwtToken. También se ha añadido la dependencia jwtToken para que useEffect se vuelva a ejecutar si cambia el token.
        return (
    <div className='mt-[7rem] w-full -z-50 opacity-50 '>
    <div className='flex animate-bounce  h-48 w-full z-10  border-4 bg-blue-400 border-b-black text-gray-900  opacity-100 '>

      <AccountCircleIcon sx={{fontSize:'120px'}}/> 
      <div className='flex-row '>
        <h1 className='font-bold mt-4'>{userIsAuth.username}</h1>
          <div className='h-30 flex flex-column mt-1  space-x-2'>
            <h3 className=''><EmailIcon sx={{fontSize:'20px'}}/>{userIsAuth.email} /</h3>
            <h3 className=''><PhoneIphoneIcon sx={{fontSize:'20px'}}/>{userIsAuth.phoneNumber} /</h3>
            <h3 className=''><LocationOnIcon sx={{fontSize:'20px'}}/>{userIsAuth.city} /</h3>
            <h3 className='mx-0'><BeenhereIcon sx={{fontSize:'20px'}}/>{userIsAuth.memberSince}</h3>
          </div> 
      </div>
    </div>
    <div className='flex  h-40 w-full z-10  border-2 bg-blue-400 backdrop-blur-xl border-b-slate-500 text-gray-900 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  opacity-100 relative'>
      <span className=""></span>
      <AccountCircleIcon sx={{fontSize:'120px'}}/> 
      <div className='flex-row'>
        <h1 className='font-bold mt-4'>{userIsAuth.username}</h1>
          <div className='h-30 flex flex-column mt-1  space-x-2'>
            <h3 className=''><EmailIcon sx={{fontSize:'20px'}}/>{userIsAuth.email} /</h3>
            <h3 className=''><PhoneIphoneIcon sx={{fontSize:'20px'}}/>{userIsAuth.phoneNumber} /</h3>
            <h3 className=''><LocationOnIcon sx={{fontSize:'20px'}}/>{userIsAuth.city} /</h3>
            <h3 className='mx-0'><BeenhereIcon sx={{fontSize:'20px'}}/>{userIsAuth.memberSince}</h3>
          </div> 
      </div>
    </div>
    <div className='flex  h-40 w-full bg-slate-500- border-2   text-black  hover:transition-all duration-200 hover:bg-blue-500 '>
      <AccountCircleIcon className='motion-safe:animate-spin mr-3' sx={{fontSize:'120px'}}/> 
      <div className='flex-row'>
        <h1 className='font-bold mt-4'>{userIsAuth.username}</h1>
          <div className='h-30 flex flex-column mt-1  space-x-2'>
            <h3 className=''><EmailIcon sx={{fontSize:'20px'}}/>{userIsAuth.email} /</h3>
            <h3 className=''><PhoneIphoneIcon sx={{fontSize:'20px'}}/>{userIsAuth.phoneNumber} /</h3>
            <h3 className=''><LocationOnIcon sx={{fontSize:'20px'}}/>{userIsAuth.city} /</h3>
            <h3 className='mx-0'><BeenhereIcon sx={{fontSize:'20px'}}/>{userIsAuth.memberSince}</h3>
          </div> 
      </div>
    </div>
    
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

// export async function getServerSideProps(context:any) {
//   const { req } = context;
//   const cookies = cookie.parse(req.headers.cookie || '');
//   const token = cookies.jwt_token;
//   console.log(token)
//   return { props: { token } };
// }
// 
import RootLayout from '@/app/layout'
import RegisterForm from 'components/RegisterForm'
// import { app, auth } from '../../../firebase'
import '../../app/globals.css'

const signup = () => {
  return (
    // <div className='px-2'>
    <RootLayout>

      <RegisterForm/>
    </RootLayout>
// </div>
  )
}

export default signup
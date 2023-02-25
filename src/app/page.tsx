import Admin from 'components/Admin'
import Carrousel from 'components/Carrousel'
import Header from 'components/Header'



export default function Home() {
  return (
    <div className='text-white'>
      {/* <Header/> */}
      <div className='mb-20'>

      <Carrousel />
      </div>
      <Admin/>
    </div>
	);
}

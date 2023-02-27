import Admin from 'components/Admin'
import Carrousel from 'components/Carrousel'
import Header from 'components/Header'
import Plans from 'components/Plans';



export default function Home() {
  return (
    <div className='text-white'>
      {/* <Header/> */}
      <Carrousel />
      <Admin/>
      
    </div>
	);
}

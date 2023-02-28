import Admin from 'components/Admin'
import Carousel from 'components/Carousel';
import Carrousel from 'components/Carrousel'
import Header from 'components/Header'
import Plans from 'components/Plans';



export default function Home() {
  return (
    <div className='text-white'>
      {/* <Header/> */}
      <Carousel />
      <Admin/>
      
    </div>
	);
}

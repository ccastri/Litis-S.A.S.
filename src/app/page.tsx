import Admin from 'components/Admin'
import Carousel from 'components/Carousel';
import Carrousel from 'components/Carrousel'
import Header from 'components/Header'
import Plans from 'components/Plans';
import Sidebar from 'components/Sidebar';
import RootLayout from '@/app/layout'

export default function Home() {
  return (
    <div className=' text-white'>
      {/* <Header/> */}
      <RootLayout>

      {/* <Sidebar/> */}
      <Carousel />
      <Admin/>
      </RootLayout>
      
    </div>
	);
}

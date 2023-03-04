import Admin from 'components/Admin';
import Carousel from 'components/Carousel';
// import RootLayout from '@/app/layout'
import './globals.css';

export default function Home() {
  return (
    <div className='text-white'>
      {/* <Header/> */}
      {/* <RootLayout > */}

      {/* <Sidebar/> */}
      <Carousel />
      <Admin/>
      {/* </RootLayout> */}
      
    </div>
	);
}

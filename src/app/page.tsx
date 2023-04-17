import Admin from './components/Admin';
import dynamic from 'next/dynamic';
import Carousel from './components/Carousel';
// import RootLayout from '@/app/layout'
import './globals.css';

const Home =() => {
  return (
    <div className='relative text-white'>
      <Carousel />
      <Admin/>     
    </div>
	);
}
export default Home
import Admin from 'components/Admin';
import Carousel from './Carousel';
// import RootLayout from '@/app/layout'
import './globals.css';

export default function Home() {
  return (
    <div className='relative text-white'>
      <Carousel />
      <Admin/>     
    </div>
	);
}

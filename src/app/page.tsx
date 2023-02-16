import Admin from 'components/Admin'
import Carrousel from 'components/Carrousel'
import Header from 'components/Header'



export default function Home() {
  return (
    <div className='w-full text-white h-screen'>
      <Header/>
      <Carrousel/>
      {/* Social security components */}
      <Admin/>
    </div>
	);
}

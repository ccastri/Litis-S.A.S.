import {forwardRef} from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WorkIcon from '@mui/icons-material/Work';

// const ref = createRef();

const Plans = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className='text-white '>
      <h1 className='font-bold text-xl py-2'>Planes y precios</h1>
      <div className='border border-black rounded my-4 py-2'>
      <h2 className='font-semibold text-md '>Plan bronce</h2>
        <LocalHospitalIcon sx={{fontSize: '60px'}}/>
        {/* <WorkIcon sx={{fontSize: '60px'}}/> */}
    <p>EPS + ARL</p>
    <p>$20.000</p>
      </div>
    </div>
  )

})
Plans.displayName = 'Plans';

export default Plans

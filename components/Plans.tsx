import {forwardRef} from 'react'

// const ref = createRef();

const Plans = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className='text-white'><h1 className=''>Plan works</h1></div>
  )
})
Plans.displayName = 'Plans';

export default Plans

import { BriefcaseIcon, CurrencyDollarIcon, ShieldCheckIcon, BadgeCheckIcon} from "@heroicons/react/outline"

export interface AdminItem {
    id: number,
    title: string,
    image: string,
    color: string
    icon: any
    
}




export const AdminItems:AdminItem[]=[
    {
        id: 1,
        title: 'Adminstradora de Salud',
        image: '/health.png',
        color: 'ffbf97',
        icon:  <ShieldCheckIcon/>  
    },
    {
        id: 2,
        title: 'Administradora de Riesgos Laborales',
        image: '/socialsecurity.png',
        color: 'bg-[#07bfff]', 
        icon: <BriefcaseIcon/>   
    },
    {
        id: 3,
        title: 'Administradora de Pension',
        image: '/pension.png',
        color: 'bg-[#25fff8]',   
        icon: <CurrencyDollarIcon/> 
    },
    {
        id: 4,
        title: 'Caja de Compensacion Familiar',
        image: '/compensacion.png',
        color: 'bg-[#ffdf88]',    
        icon: <BadgeCheckIcon/>
    },
]
import { BriefcaseIcon, CurrencyDollarIcon, ShieldCheckIcon, BadgeCheckIcon} from "@heroicons/react/outline"
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ElderlyIcon from '@mui/icons-material/Elderly';
import Diversity3Icon from '@mui/icons-material/Diversity3';

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
        icon:  <HealthAndSafetyIcon sx={{fontSize:'80px'}}/> 
    },
    {
        id: 2,
        title: 'Riesgos Laborales',
        image: '/socialsecurity.png',
        color: 'bg-[#07bfff]', 
        icon: <EngineeringIcon sx={{fontSize:'80px'}}/>
    },
    {
        id: 3,
        title: 'Administradora de Pension',
        image: '/pension.png',
        color: 'bg-[#25fff8]',   
        icon: <ElderlyIcon sx={{fontSize:'80px'}}/>
        
    },
    {
        id: 4,
        title: 'Caja de Compensacion Familiar',
        image: '/compensacion.png',
        color: 'bg-[#ffdf88]',    
        icon:  <Diversity3Icon sx={{fontSize:'80px'}}/>
    },
]
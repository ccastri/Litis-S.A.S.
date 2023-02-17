export interface AdminItem {
    id: number,
    title: string,
    image: string,
    color: string
    
}




export const AdminItems:AdminItem[]=[
    {
        id: 1,
        title: 'Adminstradora de Salud',
        image: '/health.png',
        color: '#ffbf97',    
    },
    {
        id: 2,
        title: 'Administradora de Riesgos Laborales',
        image: '/socialsecurity.png',
        color: '#07bfff',    
    },
    {
        id: 3,
        title: 'Administradora de Pension',
        image: '/pension.png',
        color: '#25fff8',    
    },
    {
        id: 4,
        title: 'Caja de Compensacion Familiar',
        image: '/compensacion.png',
        color: '#ffdf88',    
    },
]
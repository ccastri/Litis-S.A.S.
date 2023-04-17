export interface IPersonalData {
    label: string;
    name: string
    type: string
}

export const PersonalDataForm:IPersonalData[] = [
{
    label: 'Nombre',
    name: 'firstName',
    type: 'text',
},
{
    label: 'Apellido',
    name: 'lastName',
     type: 'text',
},
// {
//     label: 'Ciudad',
//     name: 'city',
//     type:'select'
// },
{
    label: 'Barrio',
    name: 'Neighborhood',
    type: 'text',
},
// {
//     label: 'Departamento',
//     name: 'department',
//     type: 'select',
// },
{
    label: 'Email',
    name: 'email',
    type: 'email',
},
{
    label: 'Celular',
    name: 'phoneNumber',
    type: 'text',

}

]
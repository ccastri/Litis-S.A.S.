declare module "cookie" {
  interface CookiesStatic<T> {
    parse(str: string, options?: any): { [key: string]: T };
  }
  const cookies: CookiesStatic<string> & {
    noConflict(): CookiesStatic<string>;
  };
  export = cookies;
}
//! Convertirla a clase y hacer el hasheo de password desde el front
//! tambien el metodo para decoodificar el jwt
TODO: namespace MyInterfaces {
  // ... interface properties
  interface User {
    // id: number,
    firstName: string;
    lastName: string;
    phoneNumber: string;
    department: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    city: string;
    neighborhood: string;
    tos_is_clicked: boolean;
    dateOfExpedition: Date;
    dateOfBirth: Date;
    // isAuth:boolean,
    // isGoogle:boolean
    // idPicture: File | string[],
  }
}

//! ASAP TODO: Beneficiary, bill interfaces

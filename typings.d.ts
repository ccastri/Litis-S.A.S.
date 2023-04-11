declare module "cookie" {
  interface CookiesStatic<T> {
    parse(str: string, options?: any): { [key: string]: T };
  }
  const cookies: CookiesStatic<string> & {
    noConflict(): CookiesStatic<string>;
  };
  export = cookies;
}

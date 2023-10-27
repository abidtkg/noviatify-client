export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginRes {
    name: string;
    token: string;
}

export interface IRegister {
    name: string;
    email: string;
    password: string;
}
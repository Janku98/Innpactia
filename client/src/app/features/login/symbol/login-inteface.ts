export interface FormLogin {
    username: string
    password: string
}


export interface LoginResponse {
    success: boolean
    userLogged: string
}
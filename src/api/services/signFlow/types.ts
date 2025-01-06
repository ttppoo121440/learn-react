export interface LoginResponse {
  expired: number;
  token: string;
  uid: string;
  username: string;
  success: boolean;
}

export interface AuthResponse {
  success: boolean;
  uid: string;
}

export interface FormLogin {
  username: string;
  password: string;
}

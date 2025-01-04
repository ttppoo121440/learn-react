export interface FormDataProps {
  username: string;
  password: string;
}
export interface LoginFormProps extends React.ComponentPropsWithoutRef<'div'> {
  setIsAuth: (isAuth: boolean) => void;
}

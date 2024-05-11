import { FC, ReactNode } from "react";

interface ButtonProps {
    variant?: 'primary'|'secondary'| "outline"
    children:ReactNode
    v?:boolean
}
 
const Button: FC<ButtonProps> = ({variant='primary' ,v, children}) => {
    return <button className={` btn ${variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-outline' }  `} > {children} </button>
     
}
 
export default Button;
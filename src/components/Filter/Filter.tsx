import { IInput } from "../Input/Input";
import '../../styles/Input.scss'

export const Filter = ({placeholder, value, name, ...rest}: IInput) => {
    return(
        <input className='input input__filter' type='text' placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}
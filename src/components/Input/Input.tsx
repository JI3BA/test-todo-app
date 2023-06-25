import { ChangeEvent, KeyboardEvent, FocusEvent} from "react";
import '../../styles/Input.scss'

export interface IInput {
    placeholder: string,
    value: string,
    name?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void,
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void,
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void,
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void
}

export const Input = ({placeholder, value, name, ...rest}: IInput) => {
    return(
            <input className='input' type='text' placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}
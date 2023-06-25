import { ChangeEvent, FocusEvent, KeyboardEvent} from "react";
import '../../styles/TextArea.scss'

interface ITextArea {
    placeholder: string,
    value: string,
    name?: string,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    onKeyDown?:(e: KeyboardEvent<HTMLTextAreaElement>) => void,
    onKeyUp?: (e: KeyboardEvent<HTMLTextAreaElement>) => void,
    onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void,
    onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void,
    className: string,
}

export const TextArea = ({placeholder, value, name, ...rest}: ITextArea) => {
    return(
            <textarea placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}
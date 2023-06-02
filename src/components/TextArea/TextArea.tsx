import '../../styles/TextArea.scss'

interface ITextArea {
    placeholder: string,
    value: string,
    name?: string,
    onChange: React.ChangeEventHandler,
    onKeyDown?: React.KeyboardEventHandler,
    onKeyUp?: React.KeyboardEventHandler,
    onBlur?: React.FocusEventHandler,
    onFocus?: React.FocusEventHandler,
    className: string,
}

export const TextArea = ({placeholder, value, name, ...rest}: ITextArea) => {
    return(
            <textarea placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}
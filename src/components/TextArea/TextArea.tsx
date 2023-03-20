import '../../styles/TextArea.scss'

interface ITextArea {
    placeholder: string,
    value: string,
    name?: string,
    onChange: React.ChangeEventHandler,
    onKeyDown?: React.KeyboardEventHandler,
    onKeyUp?: React.KeyboardEventHandler,
    onBlur?: React.FocusEventHandler,
    onFocus?: React.FocusEventHandler
}

const TextArea = ({placeholder, value, name, ...rest}: ITextArea) => {
    return(
            <textarea className='text-area' placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}

export default TextArea
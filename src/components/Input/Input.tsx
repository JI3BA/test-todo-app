import '../../styles/Input.scss'

interface Iinput {
    placeholder: string,
    value: string,
    name?: string,
    onChange: React.ChangeEventHandler,
    onKeyDown?: React.KeyboardEventHandler,
    onKeyUp?: React.KeyboardEventHandler,
    onBlur?: React.FocusEventHandler,
    onFocus?: React.FocusEventHandler
}

const Input = ({placeholder, value, name, ...rest}: Iinput) => {
    return(
            <input className='input' type='text' placeholder={placeholder} value={value} name={name} {...rest}/>
    )
}

export default Input
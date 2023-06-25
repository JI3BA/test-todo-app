import { ReactNode, MouseEvent, CSSProperties} from "react";
import '../../styles/Button.scss'

interface IButton{
    children: ReactNode,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    style?: CSSProperties,
    className: string,
}

export const Button = ({children, onClick, ...rest}: IButton) => {
    return(
            <button onClick={onClick} {...rest} >{children}</button>
    )
}


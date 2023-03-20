import '../../styles/HeaderButton.scss'

interface IButton{
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}

const HeaderButton = ({children, onClick, ...rest}: IButton) => {
    return(
            <button className="button" onClick={onClick} {...rest} >{children}</button>
    )
}

export default HeaderButton
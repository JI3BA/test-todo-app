import React, { FC, useState, useRef, useEffect } from "react";
import Input from "../Input/Input";
import '../../styles/Header.scss'
import TextArea from "../TextArea/TextArea";
import HeaderButton from "../HeaderButton/HeaderButton";

const Header: FC = () => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(e.target.value.trim().length <= 100) setBody(e.target.value)
    }

    return(
        <div className="header">
            <div className="header__container wrapper">   
                <Input value={title} placeholder='Title' onChange={onChangeInput}/>
                <TextArea value={body} placeholder='Body' onChange={onChangeTextArea}/>
                <HeaderButton>Add ToDo</HeaderButton>
            </div>
        </div>
    )
}

export default Header
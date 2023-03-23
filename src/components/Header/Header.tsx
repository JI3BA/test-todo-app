import React, { FC, useState, useEffect } from "react";
import Input from "../Input/Input";
import '../../styles/Header.scss'
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { useNote, Note } from "../../context";

interface addHeaderProps{
    mode: 'add',
}

interface EditHeaderProps{
    mode: 'edit',
    editNote: Omit<Note, 'id' | 'completed'>,
}

type HeaderProps = addHeaderProps | EditHeaderProps

const Header: FC<HeaderProps> = (props) => {
    const { addNewNote, changeNote } = useNote()
    const isEdit = props.mode === 'edit';
    const [note, setNote] = useState(isEdit ? props.editNote : {title: '', body: '', tags: ['']});
    const [bodyTag, setBodyTag] = useState<string[]>(['']);
    const [formValid, setFormValid] = useState<boolean>(false);
    const [nickDirty, setNickDirty] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        if(isEdit){
            setFormValid(true)
        }
    }, [isEdit])

    useEffect(() => {
        if(note.body.trim().length > 5){
            setFormValid(true)
        }
    }, [note.body])
 
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if(isEdit) {
            return changeNote(note);
        }
        
        addNewNote(note);
        setNote({title: '', body: '', tags: ['']});
        setFormValid(false);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = event.target;
        setNote({...note, [name]: value });

        if(event.target.name === 'body'){
            setBodyTag([...value.split(' ').filter(item => item.includes('#'))]) 
        }
    };

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const checkDupTags: RegExpMatchArray[] = [...bodyTag].map(item => item.match(/#.+?\b/)!)
        setNote({...note, tags: [String(checkDupTags.filter((item,index) => index === checkDupTags.indexOf(item)))]})

        if(event.target.value.trim().length < 5){
            setNickDirty(true)
            setErrorMessage('Field should contain more then 5 symbols')
            setFormValid(false)
        }else{
            setNickDirty(false)
            setErrorMessage('')
            setFormValid(true)
        }
    }

    const onBlurTitle = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.value.trim()
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            const strBody = note.body
            setNote({...note, body: strBody + ' '})
        }
    }

    return(
        <div className="header">
            <div className="header__container wrapper">  
                <form className='form'>
                    <Input value={note.title} placeholder='Title' onBlur={onBlurTitle} onChange={onChange} name='title'/>

                    <div className='text-area__container'>
                        {nickDirty ? <p className='text-area__message'>{errorMessage}</p> : <p className='text-area__message'></p>}
                        <TextArea value={note.body} className='text-area' placeholder='Body' onChange={onChange} onKeyDown={onKeyDown} onBlur={onBlur} name='body'/>
                    </div>

                    {isEdit && <div className="note__tags">
                                {note.tags.map((tag, index) =>  <p className="note__body note__tag" key={index}>{tag}</p>)}
                            </div>
                    }

                    {!isEdit ? <Button className="button" disabled={!formValid} onClick={onClick}>Add Note</Button>
                    : <Button className="button" disabled={!formValid} onClick={onClick}>Edit Note</Button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Header
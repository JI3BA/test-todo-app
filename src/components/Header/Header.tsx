import React, { FC, useState } from "react";
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
    const [bodyTag, setBodyTag] = useState<string[]>([]);
 
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if(isEdit) {
            return changeNote(note);
        }
        
        addNewNote(note);
        setNote({title: '', body: '', tags: []});
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = event.target;
        setNote({...note, [name]: value });

        if(event.target.name === 'body'){
            setBodyTag([...value.split(' ').filter(item => item.includes('#'))]) 
        }
    };

    const onBlur = () => {
        const checkDupTags: string[] = [...bodyTag]
        setNote({...note, tags: checkDupTags.filter((item,index) => index === checkDupTags.indexOf(item))})
    }

    return(
        <div className="header">
            <div className="header__container wrapper">  
                <form className='form'>
                    <Input value={note.title} placeholder='Title' onChange={onChange} name='title'/>
                    <TextArea value={note.body} placeholder='Body' onChange={onChange} onBlur={onBlur} name='body'/>
                    {isEdit && <div className="note__tags">
                                {note.tags.map((tag, index) =>  <p className="note__body note__tag" key={index}>{tag}</p>)}
                            </div>
                    }
                    {!isEdit ? <Button className="button" onClick={onClick}>Add Note</Button>
                    : <Button className="button" onClick={onClick}>Edit Note</Button>}
                </form>
            </div>
        </div>
    )
}

export default Header
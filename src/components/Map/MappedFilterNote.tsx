import {Header} from "../Header/Header";
import {Button} from "../Button/Button";
import {Note, useNote} from "../../context";
import {FC} from "react";
import {MappedMainBody} from "./MappedMainBody";
import {MappedMainTags} from "./MappedMainTags";

type MappedFilterNoteType = {
    filterNote: Note[]
}


export const MappedFilterNote: FC<MappedFilterNoteType> = ({filterNote}) => {
    const { selectNotesEdit, notesEdit, checkNote, removeNote, openModalNote} = useNote()
    return (
        <>
            {filterNote.map((item,index) => {
            if(item.id === notesEdit) return <Header key={item.id} mode='edit' editNote={item}/>
                return(
                <div className="notes__note" key={item.id}>
                <div className="notes__text" onClick={() => checkNote(item.id)}>
                <h2 className="note__title" style={{opacity: item.completed ? 0.5 : 1,textDecoration: item.completed ? 'line-through' : 'none'}}>{index+1}. {item.title}</h2>
                <p className="note__body" style={{opacity: item.completed ? 0.5 : 1,textDecoration: item.completed ? 'line-through' : 'none'}}>
                    <MappedMainBody noteBody={item}/>
                </p>

                <div className="note__tags">
                    <MappedMainTags noteBody={item}/>
                </div>
                </div>

                <div className="notes__buttons">
                <Button className="button button__open" onClick={() => openModalNote(item.id)}>Open</Button>
                <Button className="button button__edit" onClick={() => selectNotesEdit(item.id)}>Edit</Button>
                <Button className="button button__delete" onClick={() => removeNote(item.id)}>Delete</Button>
                </div>
                </div>)
        })
            }
        </>
    )
}
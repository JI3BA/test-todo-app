import { useState, useMemo, ChangeEvent } from "react";
import {Filter} from "../Filter/Filter";
import {Modal} from "../Modal/Modal";
import '../../styles/Main.scss'
import '../../styles/Modal.scss'
import {Button} from "../Button/Button";
import { useNote, Note } from "../../context";
import {Header} from "../Header/Header";
import { CSSTransition } from "react-transition-group";

export const Main = () => {
    const { notes, modal, selectNotesEdit, notesEdit, checkNote, removeNote, openModalNote} = useNote()
    const [filter, setFilter] = useState<string>('')

    const filterNote = useMemo<Note[]>(() => {
        if(filter){
            return notes.filter(note => note.tags.some(item => item.toLowerCase().includes(filter.toLowerCase())))
        }else{
            return notes
        }
    }, [notes, filter])
    

    const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }

    return(
        <div className="main">
            <div className="main__container wrapper">
                <Filter value={filter} placeholder='Search by tags' onChange={onChangeFilter} />
                <div className="notes">
                    {!filterNote.length ? <h1 className="main__title">Notes not found</h1>
                    : filterNote.map((item,index) => {
                    if(item.id === notesEdit) return <Header key={item.id} mode='edit' editNote={item}/>
                    return(
                        <div className="notes__note" key={item.id}>
                            <div className="notes__text" onClick={() => checkNote(item.id)}>
                                <h2 className="note__title" style={{opacity: item.completed ? 0.5 : 1,textDecoration: item.completed ? 'line-through' : 'none'}}>{index+1}. {item.title}</h2>
                                <p className="note__body" style={{opacity: item.completed ? 0.5 : 1,textDecoration: item.completed ? 'line-through' : 'none'}}>
                                    {item.body.split(' ').map((word,index) => word.includes('#') ?
                                    <span className="note__body--tag-light" key={index}>{ `${word} `}</span>
                                    :
                                    ` ${word} `)}
                                </p>
                                <div className="note__tags">
                                    {item.tags.map((tag, index) => <p className="note__body note__tag" style={{opacity: item.completed ? 0.5 : 1,textDecoration: item.completed ? 'line-through' : 'none'}} key={index}>{tag}</p>)}
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
                </div>
                <CSSTransition in={modal} classNames='modal' timeout={1000} mountOnEnter unmountOnExit>
                    <Modal />
                </CSSTransition> 
            </div>
        </div>
    )
}
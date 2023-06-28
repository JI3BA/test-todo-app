import { useState, useMemo, ChangeEvent } from "react";
import {Filter} from "../Filter/Filter";
import {Modal} from "../Modal/Modal";
import '../../styles/Main.scss'
import '../../styles/Modal.scss'
import { useNote, Note } from "../../context";
import { CSSTransition } from "react-transition-group";
import {MappedFilterNote} from "../Map/MappedFilterNote";

export const Main = () => {
    const { notes, modal } = useNote()
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
                    : <MappedFilterNote filterNote={filterNote} />
                    }
                </div>
                <CSSTransition in={modal} classNames='modal' timeout={1000} mountOnEnter unmountOnExit>
                    <Modal />
                </CSSTransition> 
            </div>
        </div>
    )
}
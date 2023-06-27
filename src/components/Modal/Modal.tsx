import React, { MouseEvent } from "react";
import { useNote } from "../../context";
import '../../styles/Main.scss'
import '../../styles/Modal.scss'
import {Button} from '../Button/Button'
import {MappedModalTags} from "../Map/MappedModalTags";



export const Modal = () => {
    const { modal, modalNote, setModalNotes} = useNote()

    return (
        <div>
            {modal &&
                <div className={modal ? 'modal modal__active' : 'modal'} onClick={() => setModalNotes(false)}>
                    <div className="modal__container" onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <h2 className="modal__title" style={{opacity: modalNote[0].completed ? 0.5 : 1,textDecoration: modalNote[0].completed ? 'line-through' : 'none'}}>{modalNote[0].title}</h2>
                        <p className="modal__body" style={{opacity: modalNote[0].completed ? 0.5 : 1,textDecoration: modalNote[0].completed ? 'line-through' : 'none'}}>{modalNote[0].body.split(' ').map((word,index) => word.includes('#') ? <span className="note__body--tag-light" key={index}>{` ${word} `}</span> : ` ${word} `)}</p>

                        <div className="modal__tags">
                            <MappedModalTags />
                        </div>

                        <Button className='modal__button' onClick={() => setModalNotes(false)}>X</Button>
                    </div>
                </div>
            }
        </div>
    )
}
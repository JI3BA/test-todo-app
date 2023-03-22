import React, { FC } from "react";
import { useNote } from "../../context";
import '../../styles/Main.scss'
import '../../styles/Modal.scss'

const Modal: FC = () => {
    const { modal, modalNote, setModalNotes} = useNote()

    return (
        <div>
            {modal &&  <div className='modal' onClick={() => setModalNotes(false)}>
                    <div className="modal__container" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                    <h2 className="modal__title" style={{opacity: modalNote[0].completed ? 0.5 : 1,textDecoration: modalNote[0].completed ? 'line-through' : 'none'}}>{modalNote[0].title}</h2>
                                <p className="modal__body" style={{opacity: modalNote[0].completed ? 0.5 : 1,textDecoration: modalNote[0].completed ? 'line-through' : 'none'}}>{modalNote[0].body.split(' ').map((word,index) => word.includes('#') ? <span className="note__body--tag-light" key={index}>{` ${word} `}</span> : ` ${word} `)}</p>
                                <div className="modal__tags">
                                    {modalNote[0].tags.map((tag, index) =>  <p className="modal__body modal__tag" style={{opacity: modalNote[0].completed ? 0.5 : 1,textDecoration: modalNote[0].completed ? 'line-through' : 'none'}} key={index}>{tag}</p>)}
                                </div>

                        <div className="modal__overlay"></div>

                        <div className='modal__buttons'>
                            <p className='button__close' onClick={() => setModalNotes(false)}>X</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Modal
import React from "react";
import {useNote} from "../../context";


export const MappedModalTags = () => {
    const { modalNote } = useNote()

    return(
        <>
            {modalNote[0].tags.map((tag, index) =>  <p className="modal__body modal__tag" style={{opacity: modalNote[0].completed ? 0.5 : 1,textDecoration: modalNote[0].completed ? 'line-through' : 'none'}} key={index}>{tag}</p>)}
        </>
    )
}
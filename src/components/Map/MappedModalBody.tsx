import React from "react";
import {useNote} from "../../context";


export const MappedModalBody = () => {
    const { modalNote } = useNote()

    return (
        <>
            {modalNote[0].body.split(' ').map((word,index) => word.includes('#')
                ? <span className="note__body--tag-light" key={index}>{` ${word} `}</span>
                : ` ${word} `)}
        </>
    )
}
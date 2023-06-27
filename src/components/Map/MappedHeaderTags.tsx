import React, {FC} from "react";
import {NoteType} from "../Header/Header";

type MappedHeaderTagsType = {
    note: NoteType
}

export const MappedHeaderTags: FC<MappedHeaderTagsType> = ({note}) => {
    return (
        <>
            {note.tags.map((tag, index) => <p className="note__body note__tag" key={index}>{tag}</p>)}
        </>
    )
}
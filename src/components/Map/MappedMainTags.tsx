import { FC } from 'react'
import {Note} from "../../context";

type MappedMainTagsType = {
    noteBody: Note
}

export const MappedMainTags: FC<MappedMainTagsType> = ({noteBody}) => {
    return (
        <>
            {noteBody.tags.map((tag, index) => <p className="note__body note__tag" style={{opacity: noteBody.completed ? 0.5 : 1,textDecoration: noteBody.completed
                    ? 'line-through'
                    : 'none'}} key={index}>
                {tag}</p>)
            }
        </>
    )
}
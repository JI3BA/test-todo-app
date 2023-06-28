import {Note} from "../../context";
import {FC} from "react";

type MappedMainBodyType = {
    noteBody: Note
}

export const MappedMainBody: FC<MappedMainBodyType> = ({noteBody}) => {
    return (
        <>
            {noteBody.body.split(' ').map((word,index) => word.includes('#')
                ? <span className="note__body--tag-light" key={index}>{ `${word} `}</span>
                : ` ${word} `)
            }
        </>
    )
}
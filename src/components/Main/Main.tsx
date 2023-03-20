import React, { FC, useState } from "react";
import Filter from "../Filter/Filter";
import '../../styles/Main.scss'

interface INotes {
    id: number,
    title: string,
    body: string
}

const Main: FC = () => {
    const [filter, setFilter] = useState<string>('')
    const [notes, setNotes] = useState<INotes[]>([
        {
            id: 0,
            title: 'car',
            body: 'I want buy a car.'
        },
        {
            id: 1,
            title: 'study',
            body: 'I will learn English tommorow'
        },
        {
            id: 2,
            title: 'walk',
            body: 'I am go for a walk at Seven p.m.'
        }
    ])

    const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }

    return(
        <div className="main">
            <div className="main__container wrapper">
                <Filter value={filter} placeholder='Search by tags' onChange={onChangeFilter} />
                <div className="notes">
                    {!notes.length ? <h1 className="main__title">Notes not found</h1>
                    : notes.map((item,index) => 
                    <div className="notes__note" key={index}>
                        <h2 className="note__title">{item.title}</h2>
                        <p className="note__body">{item.body}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Main
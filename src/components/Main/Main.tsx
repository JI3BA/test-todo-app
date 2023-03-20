import React, { FC, useState } from "react";
import Filter from "../Filter/Filter";
import '../../styles/Main.scss'
import HeaderButton from "../HeaderButton/HeaderButton";

interface INotes {
    id: number,
    title: string,
    body: string,
    tags: string[]
}

const Main: FC = () => {
    const [filter, setFilter] = useState<string>('')
    const [notes, setNotes] = useState<INotes[]>([
        {
            id: 0,
            title: 'car',
            body: 'I want to #buy a #car.',
            tags: ['#buy', '#car']
        },
        {
            id: 1,
            title: 'study',
            body: 'I will #learn English #tommorow',
            tags: ['#learn', '#tommorow']
        },
        {
            id: 2,
            title: 'walk',
            body: 'I am #go for a #walk at Seven p.m.',
            tags: ['#go', '#walk']
        },
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
                        <div className="notes__text">
                            <h2 className="note__title">{item.id+1}. {item.title}</h2>
                            <p className="note__body">{item.body}</p>
                            <div className="note__tags">
                                {item.tags.map((tag, index) =>  <p className="note__body note__tag" key={index}>{tag}</p>)}
                            </div>
                        </div>

                        <div className="notes__buttons">
                            <HeaderButton className="button button__open">Open</HeaderButton>
                            <HeaderButton className="button button__edit">Edit</HeaderButton>
                            <HeaderButton className="button button__delete">Delete</HeaderButton>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Main
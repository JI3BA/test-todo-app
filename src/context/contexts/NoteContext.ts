import { createContext } from 'react';

export interface Note{
    id: number,
    title: string,
    body: string,
    tags: string[],
    completed: boolean
}

export interface NoteContextProps {
    notes: Note[],
    setNotes(notes: Note[]): void,
    addNewNote: ({ title, body, tags }: Omit<Note, 'id' | 'completed'>) => void,
    changeNote: ({ title, body, tags }: Omit<Note, 'id' | 'completed'>) => void,
    selectNotesEdit: (todoId: Note['id']) => void,
    notesEdit: Note['id'] | null,
    checkNote: (id: Note['id']) => void,
    removeNote: (id: Note['id']) => void,
    modal: boolean,
    modalNote: Note[],
    setModalNotes: (modal: boolean) => void,
    openModalNote: (id: Note['id']) => void
}

export const NoteContext = createContext<NoteContextProps>({
    notes: [],
    setNotes: () => {},
    addNewNote: () => {},
    changeNote: () => {},
    selectNotesEdit: () => {},
    notesEdit: null,
    checkNote: () => {},
    removeNote: () => {},
    modal: false,
    modalNote: [],
    setModalNotes: () => {},
    openModalNote: () => {},
})
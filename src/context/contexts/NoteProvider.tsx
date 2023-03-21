import React, {FC, useState} from 'react';
import { NoteContext , Note} from './NoteContext'

interface StoreProviderProps {
    children: React.ReactNode;
  }

export const NoteProvider: FC<StoreProviderProps> = ({ children }) => {
    const [notes, setNotes] = useState<Note[]>([])
    const [notesEdit, setNotesEdit] = useState<Note['id']>(0);

    const addNewNote = ({title, body, tags}: Omit<Note, 'id' | 'completed'>): void => {
        setNotes([...notes, {id: Date.now(), title, body, tags, completed: false}])      
    }

    const selectNotesEdit = (id: Note['id']) => {
        setNotesEdit(id);
    };
  
    const changeNote = ({ title, body, tags }: Omit<Note, 'id' | 'completed'>): void => {
        setNotes(
            notes.map((note) => {
            if (note.id === notesEdit) {
              return { ...note, title, body, tags };
            }
            return note;
          })
        );
        setNotesEdit(0);
    };

    const removeNote = (id: Note['id']): void => {
        setNotes(note => note.filter(note => note.id !== id))
    }

    const checkNote = (id: Note['id']): void => {
        setNotes(
            notes.map((item) => {
                if(item.id === id){
                    return { ...item, completed: !item.completed }
                }
                  return item
                })
            )
    }

    return <NoteContext.Provider value={{notes, setNotes, addNewNote, selectNotesEdit, changeNote, notesEdit, checkNote, removeNote}}>{children}</NoteContext.Provider>
}
import React, {FC, useState, useEffect} from 'react';
import { NoteContext , Note} from './NoteContext'

interface StoreProviderProps {
    children: React.ReactNode;
  }

export const NoteProvider: FC<StoreProviderProps> = ({ children }) => {
    const [notes, setNotes] = useState<Note[]>(() => {
        const storageNotes = localStorage.getItem('notes'); 
        return storageNotes ? JSON.parse(storageNotes) : [];
      })
    const [notesEdit, setNotesEdit] = useState<Note['id']>(0);

    const [modal, setModal] = useState<boolean>(false)
    const [modalNote, setModalNote] = useState<Note[]>([])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

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

    const openModalNote = (id: Note['id']): void => {
        setModalNote(notes.filter(item => item.id === id))
        setModal(true)
    }   
    
    const setModalNotes = (modal: boolean): void => {
        setModal(modal)
    }

    return <NoteContext.Provider value={{notes, setNotes, addNewNote, selectNotesEdit, changeNote, notesEdit, checkNote, removeNote,
        modal, modalNote, setModalNotes, openModalNote}}>{children}</NoteContext.Provider>
}
import React from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import { NoteProvider } from './context';

function App() {
  return (
    <NoteProvider>
      <div className="App">
        <Header mode='add'/>
        <Modal />
        <Main />
      </div>
    </NoteProvider>
  );
}

export default App;

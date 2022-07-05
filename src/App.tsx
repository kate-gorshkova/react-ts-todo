import React from 'react';
import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route element={<TodosPage />} path='/'/>
                    <Route element={<AboutPage />} path='/about'/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;

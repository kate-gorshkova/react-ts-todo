import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Страница информации</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus officiis in harum cum quia, porro autem.
                Voluptate sint eum perferendis voluptatem doloribus libero neque adipisci consectetur! Totam iste voluptates repudiandae!
            </p>
            <button className='btn' onClick={() => navigate('/')}>Обратно к списку дел</button>
        </>
    )
}

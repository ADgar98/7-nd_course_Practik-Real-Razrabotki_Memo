import React from 'react'
import ReactDOM from 'react-dom/client' // Изменили импорт
import App from './App'
import { GlobalStyle } from './styles/global'

// Создаем корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'))

// Рендерим приложение
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
)

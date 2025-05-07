import styled from 'styled-components'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`

const Welcome = styled.h2`
    margin-top: 0;
`

const HomePage = () => {
    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Welcome>Добро пожаловать, {user?.name}!</Welcome>
            <p>Используйте меню слева для навигации по приложению.</p>
        </Container>
    )
}

export default HomePage

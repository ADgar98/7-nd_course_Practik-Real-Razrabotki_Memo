import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
`

const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 20px;
`

const Text = styled.p`
    font-size: 18px;
    margin-bottom: 30px;
`

const HomeLink = styled(Link)`
    padding: 12px 24px;
    background-color: #52c41a;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s;

    &:hover {
        background-color: #73d13d;
    }
`

const ErrorPage = () => {
    return (
        <Container>
            <Title>404</Title>
            <Text>Страница не найдена</Text>
            <HomeLink to="/">На главную</HomeLink>
        </Container>
    )
}

export default ErrorPage

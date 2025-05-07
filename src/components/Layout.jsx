import styled from 'styled-components'
import Navbar from './Navbar'

const Container = styled.div`
    display: flex;
    min-height: 100vh;
`

const MainContent = styled.main`
    flex: 1;
    padding: 24px;
    background-color: #f5f5f5;
`

const Layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <MainContent>{children}</MainContent>
        </Container>
    )
}

export default Layout

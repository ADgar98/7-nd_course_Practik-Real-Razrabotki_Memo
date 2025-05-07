import styled from 'styled-components'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Nav = styled.nav`
    width: 200px;
    background-color: #fff;
    padding: 24px;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
`

const NavItem = styled(NavLink)`
    padding: 12px 0;
    color: #000;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    border-bottom: 2px solid transparent;

    &:hover {
        color: #52c41a;
    }

    &.active {
        color: #52c41a;
        border-bottom: 2px solid #52c41a;
        font-weight: 600;
    }
`

const LogoutButton = styled.button`
    margin-top: auto;
    padding: 12px 0;
    background: none;
    border: none;
    color: #000;
    text-align: left;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: #ff4d4f;
    }
`

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    if (!user) return null

    return (
        <Nav>
            <NavItem to="/">Главная</NavItem>
            <NavItem to="/transactions">Мои расходы</NavItem>
            <NavItem to="/analysis">Анализ расходов</NavItem>
            <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
        </Nav>
    )
}

export default Navbar

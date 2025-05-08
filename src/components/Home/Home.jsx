import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import * as S from './Home.styled.js'

export const Home = () => {
    console.log('привет')

    return (
        <S.StyleHome>
            <Outlet />
            <Header />

            <S.StyleExpenses>
                <S.Title>Мои расходы</S.Title>
            </S.StyleExpenses>
        </S.StyleHome>
    )
}

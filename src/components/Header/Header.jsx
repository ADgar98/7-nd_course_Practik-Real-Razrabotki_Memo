import { useState } from 'react'
import * as S from './Header.styled.js'
import { Link } from 'react-router-dom'

export const Header = () => {
    const [isUsed, setIsUsed] = useState('true') //активная страница
    return (
        <S.Header>
            <S.HeaderLogoImg />
            <S.MenuList>
                <S.MenuItem>
                    <Link>
                        <S.HeadExpenses style={{ textDecoration: isUsed ? 'underline' : 'none' }} to="/">Мои расходы</S.HeadExpenses>
                    </Link>
                </S.MenuItem>
                <S.MenuItem>
                    <S.HeadAnalysis to="/analysis">
                        Анализ расходов
                    </S.HeadAnalysis>
                </S.MenuItem>
            </S.MenuList>
            <S.HeadExit to="/login">Выйти</S.HeadExit>
        </S.Header>
    )
}

import { useState } from 'react'
import * as S from './Header.styled.js'

export const Header = () => {
    const [isUsed, setIsUsed] = useState('true') //активная страница
    return (
        <S.Header>
            <S.HeaderLogoImg />
            <S.MenuList>
                <S.MenuItem>
                        <S.HeadExpenses style={{ textDecoration: isUsed ? 'underline' : 'none' }} to="/">Мои расходы</S.HeadExpenses>
                </S.MenuItem>
                <S.MenuItem>
                    <S.HeadAnalysis onClick={() => setIsUsed(false)} to="/analysis">
                        Анализ расходов
                    </S.HeadAnalysis>
                </S.MenuItem>
            </S.MenuList>
            <S.HeadExit to="/login">Выйти</S.HeadExit>
        </S.Header>
    )
}

import * as S from './Header.styled.js'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <S.Header>
            <S.HeaderLogoImg />
            <S.MenuList>
                <S.MenuItem>
                    <Link>
                        <S.HeadExpenses to="/">Мои расходы</S.HeadExpenses>
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

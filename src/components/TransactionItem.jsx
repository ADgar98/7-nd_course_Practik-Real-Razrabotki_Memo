import styled from 'styled-components'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { CATEGORIES } from '../constants/categories'

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s;

    &:hover {
        background-color: #f6ffed;
    }
`

const Info = styled.div`
    flex: 1;
    display: flex;
    gap: 20px;
`

const Description = styled.div`
    width: 40%;
`

const Category = styled.div`
    width: 20%;
    color: #52c41a;
    font-weight: 500;
`

const Date = styled.div`
    width: 20%;
    color: #8c8c8c;
`

const Amount = styled.div`
    width: 20%;
    font-weight: 600;
`

const Actions = styled.div`
    display: flex;
    gap: 10px;
`

const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #8c8c8c;
    transition: all 0.3s;

    &:hover {
        color: #52c41a;
    }

    &:last-child:hover {
        color: #ff4d4f;
    }
`

const TransactionItem = ({ transaction, onEdit, onDelete }) => {
    return (
        <Item>
            <Info>
                <Description>{transaction.description}</Description>
                <Category>{CATEGORIES[transaction.category]}</Category>
                <Date>{new Date(transaction.date).toLocaleDateString()}</Date>
                <Amount>{transaction.sum} ₽</Amount>
            </Info>
            <Actions>
                <ActionButton onClick={() => onEdit(transaction)}>
                    <FaEdit />
                </ActionButton>
                <ActionButton onClick={() => onDelete(transaction._id)}>
                    <FaTrash />
                </ActionButton>
            </Actions>
        </Item>
    )
}

export default TransactionItem
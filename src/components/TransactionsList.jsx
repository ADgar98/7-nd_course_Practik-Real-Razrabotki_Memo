import styled from 'styled-components'
import { useState } from 'react'
import Button from './Button'
import TransactionItem from './TransactionItem'
import TransactionForm from './TransactionForm'

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const Title = styled.h2`
    margin: 0;
`

const Filters = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`

const FilterButton = styled.button`
    padding: 8px 16px;
    border: 1px solid ${(props) => (props.active ? '#52c41a' : '#d9d9d9')};
    border-radius: 20px;
    background-color: ${(props) => (props.active ? '#f6ffed' : '#fff')};
    color: ${(props) => (props.active ? '#52c41a' : '#000')};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        border-color: #52c41a;
    }
`

const List = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const TransactionsList = ({
    transactions,
    loading,
    error,
    onAdd,
    onUpdate,
    onDelete,
    onFilter,
    onSort,
}) => {
    const [isAdding, setIsAdding] = useState(false)
    const [editingTransaction, setEditingTransaction] = useState(null)
    const [activeFilter, setActiveFilter] = useState('all')
    const [sortBy, setSortBy] = useState('date')

    const handleAdd = async (transaction) => {
        const result = await onAdd(transaction)
        if (result.success) {
            setIsAdding(false)
        }
    }

    const handleUpdate = async (transaction) => {
        const result = await onUpdate(editingTransaction._id, transaction)
        if (result.success) {
            setEditingTransaction(null)
        }
    }

    const handleFilter = (category) => {
        setActiveFilter(category)
        onFilter(category === 'all' ? null : category)
    }

    const handleSort = (field) => {
        setSortBy(field)
        onSort(field)
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <Header>
                <Title>Мои расходы</Title>
                <Button onClick={() => setIsAdding(true)}>Новый расход</Button>
            </Header>

            <Filters>
                <FilterButton
                    active={activeFilter === 'all'}
                    onClick={() => handleFilter('all')}
                >
                    Все
                </FilterButton>
                {Object.entries(CATEGORIES).map(([key, value]) => (
                    <FilterButton
                        key={key}
                        active={activeFilter === key}
                        onClick={() => handleFilter(key)}
                    >
                        {value}
                    </FilterButton>
                ))}
            </Filters>

            <Filters>
                <FilterButton
                    active={sortBy === 'date'}
                    onClick={() => handleSort('date')}
                >
                    По дате
                </FilterButton>
                <FilterButton
                    active={sortBy === 'sum'}
                    onClick={() => handleSort('sum')}
                >
                    По сумме
                </FilterButton>
            </Filters>

            {isAdding && (
                <TransactionForm
                    onSubmit={handleAdd}
                    onCancel={() => setIsAdding(false)}
                />
            )}

            {editingTransaction && (
                <TransactionForm
                    initialData={editingTransaction}
                    onSubmit={handleUpdate}
                    onCancel={() => setEditingTransaction(null)}
                />
            )}

            <List>
                {transactions.map((transaction) => (
                    <TransactionItem
                        key={transaction._id}
                        transaction={transaction}
                        onEdit={setEditingTransaction}
                        onDelete={onDelete}
                    />
                ))}
            </List>
        </div>
    )
}

export default TransactionsList

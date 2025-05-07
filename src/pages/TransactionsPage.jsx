import { useContext } from 'react'
import { TransactionsContext } from '../context/TransactionsContext'
import TransactionsList from '../components/TransactionsList'

const TransactionsPage = () => {
    const {
        transactions,
        isLoading,
        error,
        fetchTransactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
    } = useContext(TransactionsContext)

    const handleFilter = (category) => {
        const params = category ? { filterBy: category } : {}
        fetchTransactions(params)
    }

    const handleSort = (field) => {
        fetchTransactions({ sortBy: field })
    }

    return (
        <TransactionsList
            transactions={transactions}
            loading={isLoading}
            error={error}
            onAdd={addTransaction}
            onUpdate={updateTransaction}
            onDelete={deleteTransaction}
            onFilter={handleFilter}
            onSort={handleSort}
        />
    )
}

export default TransactionsPage

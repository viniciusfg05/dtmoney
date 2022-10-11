import { useContext } from "react";
import { TransactionContext } from "../components/context/contextApi";

export function useSummary() {
    
const { transactions } = useContext(TransactionContext)

    const somarTransaction = transactions.reduce((acc, transaction ) => {
        if(transaction.type === "income") {
            acc.income += transaction.price; // pega o acc Income e soma com o price
            acc.total += transaction.price 
        } else {
            acc.outcome += transaction.price; // pega o acc Outcome e soma com o price
            acc.total -= transaction.price 
        }

        return acc
    }, {
        //Estrutura Inicial de dados
        income: 0,
        outcome: 0,
        total: 0,
    })

    return somarTransaction
}

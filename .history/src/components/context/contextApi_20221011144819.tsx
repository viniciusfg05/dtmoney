import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionsProps {
    id: number;
    descriptions: string;
    type: "income" | "outcome"
    category: string;
    price: number;
    createdAt: any;
}


interface TransactionType {
    transactions: TransactionsProps[];
    fetchDataTransaction: (query?: string) => Promise<void>;
}

interface TransactioProviderProps {
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionType);

export function CoffeeContextProvider({ children }: TransactioProviderProps) {
    const [ transactions, setTransaction] = useState<TransactionsProps[]>([])


    async function fetchDataTransaction(query?: string) {
        const url = new URL("http://localhost:3000/transactions")

        if (query) {
             url.searchParams.append('q', query)
        }

        const response = await fetch(url)
        const data = await response.json()

        setTransaction(data)

        // await api
        // .get("/transactions") //rota possivelmente criariamos no futuro
        // .then((response) => setTransaction(response.data)); //console .log nos dados
    };
    
    useEffect(() => {
        fetchDataTransaction();
    }, []);

    return (
        <TransactionContext.Provider value={{ transactions, fetchDataTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}
 
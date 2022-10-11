import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../components/context/contextApi";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { dateFormatter, priceFormatter } from "../../components/Utils/Formated";
import { api } from "../../services/api";
import { SeachForm } from "./components/SeachForm";
import { PriceHightLightStyled, TransactionTableStyled, TransationsConteinerStyled } from "./styles";

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


interface transactionsProps {
    id: number;
    descriptions: string;
    type: "income" | "outcome"
    category: string;
    price: number;
    createdAt: string | null;
}

export function Transations() {
    const { transactions } = useContext(TransactionContext)
    
    return (
        <>
            <Header />
            <Summary />


            <TransationsConteinerStyled>
                <SeachForm />
                
                <TransactionTableStyled>
                    <tbody>
                        {transactions.map(transactions => (

                            <tr key={transactions.id}>
                            <td width="50%" >{transactions.descriptions}</td>
                            <td>
                                <PriceHightLightStyled variant={transactions.type}>
                                    {transactions.type === "outcome" && "- "}
                                    {priceFormatter.format(transactions.price)}
                                </PriceHightLightStyled>
                            </td>
                            <td>{transactions.category}</td>
                            <td>{format(new Date(transactions.createdAt.toString()), 'dd  MMM yyyy', {
                                locale: ptBR,
                            })}</td>
                        </tr>
                        ))}
                    </tbody>
                </TransactionTableStyled>
            </TransationsConteinerStyled>
        </>
    )
}
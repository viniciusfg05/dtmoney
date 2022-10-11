import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { useSummary } from "../../hooks/useSummary";
import { TransactionContext } from "../context/contextApi";
import { priceFormatter } from "../Utils/Formated";
import { SummaryCardStyled, SummaryContainerStyled } from "./styles";

export function Summary() {
    const somarTransaction = useSummary()

    return (
        <SummaryContainerStyled>
            <SummaryCardStyled>
                <header>
                    <span>Entradas</span>

                    <ArrowCircleUp size={32}  color="#00b37e"/>
                </header>

                <strong>{priceFormatter.format(somarTransaction.income)}</strong>
            </SummaryCardStyled>

            <SummaryCardStyled>
                <header>
                    <span>Saídas</span>

                    <ArrowCircleDown size={32}  color="#f75a68"/>
                </header>

                <strong>
                    - {priceFormatter.format(somarTransaction.outcome)}</strong>
            </SummaryCardStyled>

            <SummaryCardStyled variant="green" >
                <header>
                    <span>Total</span>

                    <CurrencyDollar size={32}  color="#fff"/>
                </header>

                <strong>{priceFormatter.format(somarTransaction.total)}</strong>
            </SummaryCardStyled>

            
        </SummaryContainerStyled>
    )
}
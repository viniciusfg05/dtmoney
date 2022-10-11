import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SeshFormContainer } from "./styles";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react";
import { TransactionContext } from "../../../../components/context/contextApi";
    


const serchFormSchema = zod.object({
    query: zod.string()
})

type SerchFormInput = zod.infer<typeof serchFormSchema>

export function SeachForm() {
    const { fetchDataTransaction } = useContext(TransactionContext)


    const {  register, handleSubmit, formState: { isSubmitted }} = useForm<SerchFormInput>({
        resolver: zodResolver(serchFormSchema)
    })
    
    async function handleSearchTransactions(data: SerchFormInput) {
        await  fetchDataTransaction(data.query)
    }

    return (
        <SeshFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register('query')}
            />

            <button type="submit" disabled={isSubmitted}>
                <MagnifyingGlass />
                Buscar
            </button>
        </SeshFormContainer>
    )
}

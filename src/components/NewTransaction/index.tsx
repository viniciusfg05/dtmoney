import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleUp, X } from 'phosphor-react';
import { ButtonClose, Overlay, TransationTypeButton, TransitionType } from './styles';
import { Content } from './styles';
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TransactionContext } from '../context/contextApi';
    


const NewTransationFormSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    type: zod.enum(['income', 'outcome'])
})

type NewTransationFormInput = zod.infer<typeof NewTransationFormSchema>


export function NewTransationModal() {
    const { fetchDataTransaction } = useContext(TransactionContext)


    const {  control, register, handleSubmit, formState: { isSubmitted }} = useForm<NewTransationFormInput>({
        resolver: zodResolver(NewTransationFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleNewTransaction(data: any) {
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                    <ButtonClose>
                        <X size={24}/>
                    </ButtonClose>

                    <form action="" onSubmit={handleSubmit(handleNewTransaction)}>
                        <input 
                            type="text" 
                            placeholder='Descrição' 
                            required 
                            {...register('description')}
                        />
                        <input 
                            type="number" 
                            placeholder='Preço' 
                            required 
                            {...register('price', { valueAsNumber: true })}
                        />
                        <input 
                            type="text" 
                            placeholder='Categoria' 
                            required 
                            {...register('category')}
                        />

                        <Controller 
                            control={control}
                            name="type"
                            render={({ field }) => {
                                // console.log(field )
                                return (
                                    <TransitionType onValueChange={field.onChange} value={field.value}>
                                        <TransationTypeButton variant='income' value='income'>
                                            <ArrowCircleUp size={24}/>
                                            Entrada
                                        </TransationTypeButton>

                                        <TransationTypeButton variant='outcome' value='outcome'>
                                            <ArrowCircleUp size={24}/>
                                            Saída
                                        </TransationTypeButton>
                                    </TransitionType>
                                )
                            }}
                        />

                        <button type='submit' disabled={isSubmitted}>
                            Cadastrar
                        </button>
                    </form>
            </Content>
        </Dialog.Portal>
    )
}
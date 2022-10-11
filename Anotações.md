# Bibliotecas para ajudar na acenssibilidade 
    - Ariakit
    - Headlessui - componentização
    - Chakra Ui
    - Radix ui


# Proprieda asChild - Para Reaproveitar o combotente filho ao inves de criar um novo
~~~tsx 
    <Dialog.Trigger asChild>
      <NewTransationButtonStyled>Nova Transação</NewTransationButtonStyled> 
    </Dialog.Trigger>
~~~

Propriedade Portal React - Uma função do proprio react que nos permite renderizar um elemento filho em outro componente de foma facil


# Pata retorna o Data formatado de uma forma que o javascript entenda

~~~js
new Date().toISOString()
~~~


# Features json.server
npx json-server server.json -w - Observar as mudanção no json.server
npx json-server server.json -w -d 500 - Add delay 500ms


# Metodo reduce()
Uma foma de vazer calculos de transações muito facil

~~~js
    //reduce: Converte um array em para outra estrutura de dados
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
~~~



# Formata
~~~js
  export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

  export const priceFormatter = new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL"
  })
<>
  <td>
    {transactions.type === "outcome" && "- "} {priceFormatter.format(transactions.price)}
  </td>
  <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
<\>

~~~

# Posso criar Hooks proprios para função complexas

~~~js

  export function useSummary() {
    
    const funcao = {

    }

    return funcao
  }


  Para usar o hook e como qualquer outro hook 
  const somarTransaction = useSummary()

~~~

# Usando o react-hook-form e zod

npm i zod
npm i react-hook-form
npm i @hookform/resolvers

~~~js
import { useForm } from "react-hook-form";
import { SeshFormContainer } from "./styles";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

  const serchFormSchema = zod.object({
    query: zod.string()
})

type SerchFormInput = zod.infer<typeof serchFormSchema>

export function SeachForm() {
    const {  register, handleSubmit } = useForm<SerchFormInput>({
        resolver: zodResolver(serchFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    function handleSearchTransactions(data: SerchFormInput) {}
    return (
        <SeshFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" placeholder="Busque por transações" {...register('query')}/>
            <input type="text" placeholder="Busque por transações" {...register('price', { valueAsNumber: true })}/> // Coverte o valor para numero
        </SeshFormContainer>
    )
}
~~~


Quando trabalhamos com react-hook-form e precisamos da informação de um elemento html sem ele nativo do html como "input, textarea e etc" usamos o metodo "register"
Já para elemento que não são nativo vamos precisar usar um api de "controller"  e detro do react-hook-form vamos usar o "control"

~~~tsx
  import { Controller, useForm } from 'react-hook-form';


  <Controller 
        control={control}
        name="type"
        render={({ field }) => {
            console.log(field )
            return (
                <TransitionType onValueChange={field.onChange} value={field.value}> //value é importante caso eu queria passar um valor padrao 
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
~~~

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// export function formatDate(date: any) {
    const formattedDate = format(new Date(), 'dd  MMM yyyy', {
      locale: ptBR,
    });
//     return formattedDate;
// }

export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
})


import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: string) {
    const formattedDate = format(new Date(date), 'dd  MMM yyyy', {
      locale: ptBR,
    });
    return formattedDate;
  }
export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
})


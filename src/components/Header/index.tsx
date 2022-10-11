import logo from  '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { HeaderContainerStyled, HeaderContentStyled, NewTransationButtonStyled } from './styles'
import { NewTransationModal } from '../NewTransaction';

const style = { background: "red",  }

export function Header() {

  return (
    <HeaderContainerStyled>
      <HeaderContentStyled>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButtonStyled>Nova Transação</NewTransationButtonStyled> 
          </Dialog.Trigger>

          <NewTransationModal />

        </Dialog.Root>
      </HeaderContentStyled>
    </HeaderContainerStyled>
  )
} 
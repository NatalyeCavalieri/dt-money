import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImage from '../../assets/Ignite simbol.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionsModal } from '../NewTransactionsModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';
import { Transations } from '../../pages/Transations';


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;

    background: rgba(0, 0 , 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius:  6px;
    padding:  2.5rem 3rem;
    background: ${props => props.theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); //Centralizar elementos na tela

    form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme['gray-500']};

            }
        }

        button[type="submit"] {
            height: 3.62rem;
            border: 0;
            background: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 6px;
            margin-top:  1.5rem;
            transition: background-color 0.3s, color;
            
            &:disabled {
                opacity: 0.5;
            }
            
            &:not(:disabled):hover {
                background: ${props => props.theme['green-700']};
                color: ${props => props.theme['gray-300']};
                cursor: pointer;
                
            }
        }
    }
`

export const  ButtonClose = styled(Dialog.Close)`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    background: transparent;
    border: 0;
    line-height: 0;
    top: 1.5rem;
    right: 1.5rem;

    cursor: pointer;
    color: ${props => props.theme['gray-500']};
`


interface TransationsTypeButtonProps {
    variant?: 'income' | 'outcome'
}

export const TransitionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 1rem;
    margin-top: 0.5rem;
`

export const TransationTypeButton = styled(RadioGroup.Item)<TransationsTypeButtonProps>`
    background: ${props => props.theme['gray-700']};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    color: ${props => props.theme['gray-300']};

    svg {
        color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']}
    }

    &[data-state='unchecked']:hover {
        background: ${props => props.theme['gray-600']};
        transition: background-color 0.3s;
    }

    &[data-state='checked'] {
        background: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-500']};
        transition: 0.3s;
        
        svg {
            color: ${props => props.theme.white};
        }
    }
`
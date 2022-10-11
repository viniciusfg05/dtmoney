import styled from 'styled-components'


export const HeaderContainerStyled = styled.header`
    background:  ${(props) => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem 0; 
`

export const HeaderContentStyled = styled.div`
    width: 100%;
    max-width:  1120px;

    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NewTransationButtonStyled = styled.button`
    height: 50px;
    border: 0;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    
    &:hover {
        transition:  background-color 0.3s;
        background: ${(props) => props.theme['green-700']};

    }

`


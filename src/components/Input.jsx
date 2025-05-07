import styled from 'styled-components'

const StyledInput = styled.input`
    padding: 12px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    transition: all 0.3s;

    &:focus {
        border-color: #52c41a;
        outline: none;
        box-shadow: 0 0 0 2px rgba(82, 196, 26, 0.2);
    }

    &::placeholder {
        color: #bfbfbf;
    }
`

const Input = (props) => {
    return <StyledInput {...props} />
}

export default Input

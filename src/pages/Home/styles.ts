import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  color: ${(props) => props.theme['gray-100']};
`

const InputBase = styled.input`
  height: 2.5rem;

  padding: 0 0.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-size: 1.125rem;
  font-weight: bold;

  color: ${(props) => props.theme['gray-100']};
  background: transparent;

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(InputBase)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(InputBase)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-size: 10rem;
  font-family: 'Roboto Mono', monospace;
  line-height: 8rem;

  color: ${(props) => props.theme['gray-100']};

  span {
    padding: 2rem 1rem;
    border-radius: 8px;

    background-color: ${(props) => props.theme['gray-700']};
  }
`

export const Separator = styled.div`
  width: 4rem;

  display: flex;
  justify-content: center;

  padding: 2rem 0;

  overflow: hidden;

  color: ${(props) => props.theme['green-500']};
`

export const StartCountdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;

  font-weight: bold;
  cursor: pointer;

  border: 0;
  border-radius: 8px;

  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['green-500']};

  transition: background 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: 100vh;

  display: flex;
  flex-direction: column;

  margin: 5rem auto;
  padding: 2.5rem;

  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-800']};
`

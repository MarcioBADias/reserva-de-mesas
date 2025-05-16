import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #007bff;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    gap: 20px;

    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: #007bff;
      padding: 10px;
      border: 1px solid #007bff;
      border-radius: 5px;
    }
  }
`

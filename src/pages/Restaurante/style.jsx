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

  input {
    padding: 10px;
    margin: 10px;
    font-size: 1rem;
  }

  button {
    padding: 10px;
    font-size: 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
  }
`

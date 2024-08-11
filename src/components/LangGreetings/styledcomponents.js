import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10%;
  height: 100vh;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 40px;
`

export const ButtonsBox = styled.ul`
  padding: 0px;
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  border: 1px solid #db1c48;
  outline: none;
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 60px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: large;
  font-weight: 500;
  font-family: 'Roboto';

  background-color: ${props => (props.active ? '#db1c48' : '#ffffff')};
  color: ${props => (props.active ? '#ffffff' : '#db1c48')};
`

export const Img = styled.img`
  width: 50%;
  max-width: 300px;
  margin: 20px;
`
export const List = styled.li`
  list-style: none;
  padding: 0px;
`

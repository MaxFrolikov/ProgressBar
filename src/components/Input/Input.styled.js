import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`

export const Block = styled.div`
`

export const Article = styled.div`
  font-size: small;
  font-family: Arial, serif;
  padding-left: 2px;
  margin-top: 16px;	
  display: flex;
`



export const NameInput = styled.input`
  height: 18px;
  border: 1px solid black;
  border-radius: 5px 1px 1px 5px;
`

export const DateInput = styled.input`
  height: 20px;
  border: 1px solid black;
  border-radius: 1px;
`

export const Button = styled.button`
  height: 22px;
  border: 1px solid black;
  background: white;
  border-radius: 1px 5px 5px 1px;
`
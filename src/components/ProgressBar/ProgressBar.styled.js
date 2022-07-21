import styled from "styled-components";

export const BarBlock = styled.div`
  font-family: Arial, serif;
  margin-bottom: 25px;
  margin-top: 25px;
`

export const BarHeader = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: space-between;
`

export const Article = styled.a`
`

export const BarHeaderRight = styled.div`
  display: flex;
  justify-content: flex-end
`

export const GrayText = styled.a`
  color: gray;
  margin-right: 8px;
`
export const Button = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center
`

export const Bar = styled.div`
  margin: auto;
  height: 8px;
  width: 80%;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
`;

export const BarBackground = styled(BaseBox)`
  background: #696969;
  width: 100%;
`;

export const BarProgress = styled(BaseBox)`
`;

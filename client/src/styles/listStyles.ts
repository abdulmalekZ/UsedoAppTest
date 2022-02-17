import styled from "styled-components";

export const ListItemContainer = styled.div`
margin-bottom: 20px;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 10px;
background-color: #ededed;
border-radius: 10px;
`;

export interface PropsImg {
  rndColor: string;
}

export const ImgContainer = styled.div<PropsImg>`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.rndColor};
`;

export const InfoContainer = styled.div`
  margin-left: 28px;
  font-size: 3rem;
`

export const Avatar = styled.div`
  color:white;
  font-size: 5rem;
  font-weight: bold;
`


export const ListItemContainerDetils = styled.div`
  margin-top: 38px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ImgContainerDetails = styled(ImgContainer)`
  margin-bottom: 30px;
`

export const Details = styled.div`
  background-color: #dedede;
  width: 80%;
  border-radius: 10px;
  margin-top: 10px;
  padding: 28px;
  color: #000;
  font-size: 2rem;
  margin-bottom: 28px;
`

export const Button = styled.button`
    padding: 15px;
    margin: 20px;
    background-color: #4cc9e7;
    color: white;
    font-size: 2rem;
    border-radius: 10px;
`
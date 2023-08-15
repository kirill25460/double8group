import styled from 'styled-components';


export const Container = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: normal;
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

const TxtExp =styled.h2`
width:497px;
font-family: Montserrat;
font-size: 56px;
font-weight: 800;
line-height: 61px;
letter-spacing: 0px;
text-align: left;
color: #F8821E;
`;

const Wrap = styled.div``;

const WrapInput = styled.div``;

const WrapFor3Inputs = styled.div``;

const InputName = styled.input`
width:270px;
height:35px;
border-radius: 2px solid:#F8821E;
border: 2px solid #F8821E;
color:#C5C5C5;
margin-bottom:20px;
margin-right:31px;
`;

const InputEmail = styled.input`
width: 196px;
height: 35px;
border-radius: 2px solid:#F8821E;
border: 2px solid #F8821E;
color:#C5C5C5;
`;

const InputReview = styled.input`

width: 497px;
height: 352px;
border-radius: 2px solid:#F8821E;
border: 2px solid #F8821E;
color:#C5C5C5;


`;

const InputFileReview = styled.input``;

export const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top:18px;
  right: 25px;
  width: 113px;
  height: 52px;
  background-color:#22252A;
  color:#fff;
  border-radius: 24px 44px;
  border: none;
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

const SharePic = styled.img`

height: 749px;


`;


export {
    WrapInput,
    WrapFor3Inputs,
    Wrap,
    TxtExp,
    InputName,
    InputEmail,
    InputReview,
    SharePic,
    InputFileReview,

}
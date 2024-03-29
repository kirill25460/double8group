import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TfiClip } from 'react-icons/tfi';
import { PiTelegramLogo } from 'react-icons/pi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 45px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {

    padding: 0 auto;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px;
    padding-bottom: 60px;
  }
`;

export const BookUsTxt = styled.h2`
font-family: Montserrat;
  font-size: 45px;
  font-weight: 800;
  line-height: 61px;
  letter-spacing: 0px;
  margin: 0;
  text-align: center;
  color: #f8821f;
  margin-bottom: 55px;
  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    margin-top:50px;
    font-size: 46px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 65px;
  }
`;

export const BookUsPar = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin: 0;
    width: 347px;
    font-family: DM Sans;
    font-size: 17px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;
    color: #f8821f;
    margin-bottom: 52px;
  }
`;

export const BookUsBtn = styled.button`

  cursor: pointer;
  width: 188px;
  height: 67px;
  color: #202020;
  border: none;
  background-color: #f8821f;
  font-family: 'DM Sans';
  font-size: 23px;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 500;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  margin: 0 20px;
  &:hover {
    box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);
    transform: translateY(-7px);
  }
  @media screen and (min-width: 768px) {
    width: 210px;
    height: 75px;
    margin: 0 44px;
  }
  
`;

export const PicToolsL = styled.img`
  width: 50px;
  height: 70px;
  @media screen and (min-width: 768px) {
    vertical-align: bottom;
    margin-bottom: -63px;
    width: 174px;
    height: 173px;
  }
`;

export const PicToolsR = styled.img`

  width: 50px;
  height: 70px;
  @media screen and (min-width: 768px) {
    vertical-align: bottom;
    margin-bottom: -63px;
    width: 174px;
    height: 173px;
  }
  @media screen and (min-width: 1440px) {
    vertical-align: bottom;
    margin-bottom: -63px;
    width: 174px;
    height: 173px;
  }
`;

export const ButPicContainer = styled.div`
  display: flex;
  margin-bottom: -63px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

`;


export const StyledLink = styled(NavLink)`
margin:0;
`;

export const BookUsList = styled.ul`
display:none;
@media screen and (min-width: 768px) {
margin:0 0 45px;
display:block;
padding:0;
list-style:none;
display:flex;
gap:30px;}
`;

export const BookUsItem = styled.li`

`;

export const ItemText = styled.p`
color: black;

`;

// ----------------------------------------------------------------------




export const ContactWrap = styled.div`
  display: flex;

  justify-content: center;
  align-items: normal;
  margin: 0 auto;
padding-top:30px;
flex-direction: row;
  
`;

const BlackSpan = styled.span`
  color: black;
`

const TxtExp = styled.h2`
margin:0;
  width: 300px;
  font-family: Montserrat;
  font-size: 46px;
  font-weight: 800;
  line-height: 43px;
  letter-spacing: 0px;
  text-align: left;
  color: #f8821e;
  @media screen and (min-width: 768px) {
    width: 264px;
    font-size: 46px;
    line-height: 43px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    width: 497px;
    font-size: 56px;
    line-height: 61px;
    margin-bottom:44px;
  }
`;

const Wrap = styled.div``;

const WrapInput = styled.div`
display: flex;
margin-bottom:40px;
`;

const WrapFor3Inputs = styled.form`

  margin-bottom: 65px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 485px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    width: 100%;
  }
`;

const InputName = styled.input`
  width: 150px;
  height: 33px;
  outline: none;
  border-width: 0 0 2px;
  border-radius: 2px;
  border-bottom: 2px solid #f8821e;
  color: #c5c5c5;
  margin-bottom: 20px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 29px;

  }
  @media screen and (min-width: 1440px) {
    width: 254px;
    height: 33px;

  }

`;

const SelectType = styled.select`
  width: 196px;
  height: 35px;
  border-radius: 2px;
  border: 2px solid #f8821e;
  color: #c5c5c5;
`;

const InputReview = styled.textarea`
  width: 265px;
  height: 50px;
  resize: none;
  outline: none;
  border-width: 0 0 2px;
  border-bottom: 2px solid #f8821e;
  color: #c5c5c5;
  @media screen and (min-width: 768px) {
    width: 415px;
    height: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 480px;
    height: 32px;
  }
`;

const SharePic = styled.img`

  height: 345px;
  width: 320px;
  top: 285px;
  left: 35px;
  @media screen and (min-width: 768px) {
 
    height: 356px;
    width: 366px;
    top: 90px;
    left: 640px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const SharePicDesc = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

const MainInput = styled.div`
  position: relative;
`;

const InputFileReview = styled.input`
  flex: 1;
  position: relative;
  cursor: pointer;
  width: 22px;
  height: 22px;
  display: none;
`;

const InputContainer = styled.div`
  display: flex;

 
`;

const SubBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 30px;
`;

const SvgClip = styled(TfiClip)`
  width: 22px;
  height: 22px;
  padding: 7px;
  fill: #f8821e;
  background-color: white;
  margin: 0 13px 13px 0;
  border: 2px solid #f8821e;
  border-radius: 2px;
  cursor: pointer;
`;
const SvgTg = styled(PiTelegramLogo)`
  width: 22px;
  height: 22px;
  padding: 7px;
  fill: #f8821e;
  background-color: white;
  border: none;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    box-shadow: 0 15px 20px rgba(32, 32, 32, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;

const InputPhone = styled.input`

  height: 33px;
  width: 150px;
  outline: none;
  border-width: 0 0 2px;
  border-radius: 2px;
  border-bottom: 2px solid #f8821e;
  color: #c5c5c5;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 29px;
  }
  @media screen and (min-width: 1440px) {
    height: 33px;
    width: 254px;
  }
`;

const InputEmail = styled.input`
  width: 150px;
  height: 33px;
  outline: none;
  border-width: 0 0 2px;
  border-radius: 2px;
  border-bottom: 2px solid #f8821e;
  color: #c5c5c5;
  margin-right: 30px;
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 29px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 254px;
    height: 33px;
    margin-right: 32px;
  }
`;

const NumberWrap = styled.div`
display:flex;
`;

const WrapForMobPhoto = styled.div`
@media screen and (min-width: 768px) {
  display:flex;
}`;

export const DiscountTxt = styled.h3`
margin:0 auto;
width:300px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0px;
  color:red;
  @media screen and (min-width: 768px) {
    width:600px;
  }
`;

export {WrapForMobPhoto,
  WrapInput,
  WrapFor3Inputs,
  Wrap,
  NumberWrap,
  TxtExp,
  InputName,
  SelectType,
  InputReview,
  InputEmail,
  SharePic,
  InputFileReview,
  MainInput,
  InputContainer,
  SvgClip,
  SvgTg,
  SubBtn,
  InputPhone,
  SharePicDesc,
  BlackSpan
};

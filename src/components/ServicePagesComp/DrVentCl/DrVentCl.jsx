
import { NavLink } from 'react-router-dom';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import {
  Container,
  NameService,
  TextService,
  WrapSlider,
  ButtonServices,
  WrapService,
  WrapImages,
  MobButtonServices,
  DescriptionService,
  ImgText,
  SeerviceImages,
  } from './DrVentCl.styled';

import before from 'images/dryervbefor.jpg';
import after from 'images/dryervafter.jpg';
import BeforeAfterText from 'images/before-after.png';
import Clock from 'images/icon_clock.png';
import Money from 'images/money.svg'




const FIRST_IMAGE = {
  imageUrl: before,
};
const SECOND_IMAGE = {
  imageUrl: after,
};
const delimiterIconStyles = {
  width: '50px',
  height: '50px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  borderRadius: 'none',
  backgroundImage: `url(${BeforeAfterText})`,
};
export const DrVentCl = () => {
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
   
    }
  };

  return (
    <>
      <Container>
        <WrapService>
          <NameService>DRYER VENT CLEANING</NameService>
          <TextService>
            If your dryer has a problem with air flow, full of lint, moldy
            smell, clothes takes longer to dry then is time to clean it. Why?
            Because clogged dryer vent can also be a fire hazard.
          </TextService>
         
          <NavLink to="/"
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('contact_us');
                }, 5)
              } >
            <ButtonServices>BOOK THIS SERVICE</ButtonServices>
          </NavLink>
        </WrapService>

        <WrapSlider>
      
          <ReactBeforeSliderComponent
            firstImage={SECOND_IMAGE}
            secondImage={FIRST_IMAGE}
            delimiterColor={'#F8821E'}
            delimiterIconStyles={delimiterIconStyles}
            width={345}
            height={500}
          />
        </WrapSlider>
        <DescriptionService>
            *Price is an accurate estimate based on standard scope of work
          </DescriptionService>
        <WrapImages>
          <SeerviceImages src={Clock} alt="Logo" />
          <ImgText>3 HOURS FOR FULL PROCESS</ImgText>
          <img src={Money} width="61" height="61" alt='Money'/>
          <ImgText>FROM 180$</ImgText>

        </WrapImages>
        <div>
          <NavLink to="/"
              onClick={() =>
                setTimeout(() => {
                  scrollToSection('contact_us');
                }, 5)
              } >
            <MobButtonServices>BOOK THIS SERVICE</MobButtonServices>
          </NavLink>
        </div>
      </Container>
    </>
  );
};

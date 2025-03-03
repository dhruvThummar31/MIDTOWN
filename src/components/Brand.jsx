import React from 'react'
import styled, { keyframes, css } from "styled-components";
import '../styles/Brand.css'
import ResBrand from './ResBrand';

function Brand() {
    const row1 = [
        "https://therealestateconnect.com/assets/images/new-logos/n1.png",
        "https://therealestateconnect.com/assets/images/new-logos/n2.png",
        "https://therealestateconnect.com/assets/images/new-logos/n20.png",
        "https://therealestateconnect.com/assets/images/new-logos/n12.png",
        "https://therealestateconnect.com/assets/images/new-logos/n22.png",
        "https://therealestateconnect.com/assets/images/new-logos/n57.png",
        "https://therealestateconnect.com/assets/images/new-logos/n58.png",
        "https://therealestateconnect.com/assets/images/new-logos/n40.png",
      ];
    
      const row2 = [
       "https://therealestateconnect.com/assets/images/new-logos/n45.png",
       "https://therealestateconnect.com/assets/images/new-logos/n47.png",
       "https://therealestateconnect.com/assets/images/new-logos/n46.png",
       "https://therealestateconnect.com/assets/images/new-logos/n44.png",
       "https://therealestateconnect.com/assets/images/new-logos/n32.png",
       "https://therealestateconnect.com/assets/images/new-logos/n73.png",
       "https://therealestateconnect.com/assets/images/new-logos/n55.png"
      ];
  return (
    <>
    <BrandContainer className='brnd-main'>
      <Wrapper>
        <Text className='brand-title'>Builders We Represent</Text>
        <Note className='brand-subtitle'>Our customers have gotten offers from awesome companies.</Note>
        <Marquee >
          <MarqueeGroup className='mx-8'>
            {row1.map((el) => (
              <ImageGroup className='img-grp' >
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
            </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </BrandContainer>
    </>        
  )
}

export default Brand;


const BrandContainer = styled.div`
  width:94vw;
  height: 100vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:-4vh;
  
  @media (min-width: 1024px) {
    height: 80vh;
    margin-top:8vh;
  }
    
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #02203c;
  margin-left:7vw;

  @media (min-width: 1024px) {
    font-size: 50px;  // Further increase for larger screens
    margin-top:-7vw;
  }
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-left:7vw;
  margin-bottom: 40px;
  color: #7c8e9a;
    @media (min-width: 1024px) {
    font-size: 19px;  // Further increase for larger screens
    margin-top:-1vw;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100vw;  
  overflow: hidden;
  user-select: none;
  
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 30%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
`;    


const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-80%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -2s;
   
  
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 10rem; /* Set a fixed width */
  height: 6rem; /* Set a fixed height */
  padding: 0.57rem; /* Adjust padding to your preference */
  ;

  @media (min-width: 1024px) {
    padding:0.1rem;
    margin-top:1.5em;
  }

 @media screen and (max-width: 640px) {
    width: 6rem !important; /* Increase the box width */
    height: 4rem; /* Decrease the box height */
  }

`;


const Image = styled.img`
  object-fit: contain;
  width: 100%; /* Ensure the image fills its container */
  height: 100%; /* Ensure the image fills its container */
  border-radius: 0.5rem;
  padding: 5px 18px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   @media (min-width: 1024px) {
     padding: 5px 12px; 
  }

   @media screen and (max-width: 640px) {
    width: 120%; /* Increase the logo width */
    height: 150%; /* Increase the logo height */
    padding:0px;
  }
`;


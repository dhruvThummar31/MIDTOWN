import React from "react";
import styled, { keyframes, css } from "styled-components";
import '../styles/ResBrand.css'

function ResBrand() {
  const logos = [
    "https://therealestateconnect.com/assets/images/new-logos/n45.png",
    "https://therealestateconnect.com/assets/images/new-logos/n47.png",
    "https://therealestateconnect.com/assets/images/new-logos/n46.png",
    "https://therealestateconnect.com/assets/images/new-logos/n44.png",
    "https://therealestateconnect.com/assets/images/new-logos/n32.png",
    "https://therealestateconnect.com/assets/images/new-logos/n73.png",
    "https://therealestateconnect.com/assets/images/new-logos/n55.png",
    "https://therealestateconnect.com/assets/images/new-logos/n1.png",
    "https://therealestateconnect.com/assets/images/new-logos/n2.png",
    "https://therealestateconnect.com/assets/images/new-logos/n20.png",
    "https://therealestateconnect.com/assets/images/new-logos/n12.png",
    "https://therealestateconnect.com/assets/images/new-logos/n22.png",
    "https://therealestateconnect.com/assets/images/new-logos/n57.png",
    "https://therealestateconnect.com/assets/images/new-logos/n58.png",
    "https://therealestateconnect.com/assets/images/new-logos/n40.png",
  ];

  return (
    <BrandContainer className="b-con">
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {logos.map((src, index) => (
              <ImageWrapper key={index}>
                <Image src={src} />
              </ImageWrapper>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {logos.map((src, index) => (
              <ImageWrapper key={index}>
                <Image src={src} />
              </ImageWrapper>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </BrandContainer>
  );
}

export default ResBrand;

// Styled Components
const BrandContainer = styled.div`
  width: 94vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10vh 0vh;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0)
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeGroup = styled.div`
  display: flex;
  animation: ${scrollX} 30s linear infinite;
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 6rem;
  padding: 0.5rem;


`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import heroImg from "../assets/hero_img2.png";
import { Typography, Button } from ".";

const Hero = () => {
  return (
    <Wrapper>
      <div className='hero'>
        <Typography.H1 className='hero__title'>
          <span>Hello!</span> <br /> You need to shop right now!
        </Typography.H1>
        <Button variant='primary' className='header__link'>
          <Link to='/products'>Shop Now</Link>
        </Button>
        <div className='hero__img'>
          <img src={heroImg} alt='hero - img' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;

  .hero {
    padding: 0 1rem 0 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
  }

  .hero__title {
    align-self: flex-start;
    margin-top: 10vh;
    position: relative;
    z-index: 1;
    text-align: center;
    span {
      color: var(--green-color-1);
    }

    &::before {
      content: "";
      position: absolute;
      top: -1rem;
      left: -5rem;
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      background: var(--yellow-color-1);
      z-index: -1;
    }
  }

  .header__link {
    width: max-content;
    z-index: 1;
    text-align: center;
    margin-left: 100px;
  }
  

  .hero__img {
    width: min(90%, 480px);
    align-self: flex-end;
    margin-top: -200px
  }
`;

export default Hero;

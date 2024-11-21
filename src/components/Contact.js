import React from "react";
import styled from "styled-components";

import { Typography } from ".";

const Contact = () => {
  return (
    <Wrapper>
      <div className='contact__text'>
        <Typography.H2>Lorem ipsum a dolor actipous create amit, dolor color qualification.</Typography.H2>
        <Typography.P>
        Lorem orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
         took a galley of type and scrambled it to make a type specimen book.
        </Typography.P>
      </div>
      <form className='contact__form' onSubmit={(e) => e.preventDefault()}>
        <input type='text' placeholder='Enter Email' />
        <button type='submit'>Subscribe</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1rem;
  max-width: 750px;

  .contact__text {
    h2 {
      margin-bottom: 2rem;
    }
  }

  .contact__form {
    border-radius: var(--radius);
    border: 0.3rem solid var(--green-color-1);
    padding: 0.5rem;
    width: min(100%, 500px);
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    input,
    button {
      font-size: var(--fs-400);
    }

    button {
      background: var(--green-color-1);
      border-radius: var(--radius);
      padding: 0.5rem 1rem;
      transition: var(--transition);
      color: var(--blue-color-3);
      &:hover {
        color: var(--white-color);
      }
    }
  }
`;

export default Contact;

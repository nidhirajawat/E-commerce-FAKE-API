import React from "react";
import styled from "styled-components";

import { Breadcrumb,Typography } from "../components";

import Screen from "../styles/Screen";

// import img from "../assets/about_img.jpg";

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb title="About" />
      <Wrapper className="page">
        <div className="about__text">
          <Typography.H1>About-Section</Typography.H1>
          <Typography.P>
          Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
          Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
          </Typography.P>
        </div>
        <div className="about__img">
          <img src='https://png.pngtree.com/background/20230519/original/pngtree-store-with-hanging-clothing-in-a-high-end-environment-picture-image_2654941.jpg' alt="about-img" />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 1rem;

  ${Screen.lg`
  grid-template-columns: repeat(3,1fr);
  gap:2rem;
`}
  .about__text {
    max-width: 500px;
  }
  .about__img {
    max-width: 700px;
    ${Screen.lg`
  grid-column: 2/4;
`}
  }

  h1 {
    color: var(--green-color-1);
    margin-bottom: 2rem;
  }
`;

export default AboutPage;

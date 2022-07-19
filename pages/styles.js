import styled from "styled-components";

export const SectionOne = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: url("https://placehold.jp/1200x500.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 80vh;
  opacity: 0.5;
  :hover {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

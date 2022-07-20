import styled from "styled-components";
import { homeBg } from "../src/assets/img";

export const SectionOne = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: url("https://scontent.fcgh23-1.fna.fbcdn.net/v/t39.30808-6/294638082_5556420237734782_5627069322565715374_n.jpg");
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

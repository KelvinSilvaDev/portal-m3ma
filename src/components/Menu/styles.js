import styled from "styled-components";

export const MenuWrapp = styled.div`
  padding: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  nav {
    a {
      padding: 1rem;
      :hover {
        color: #faa0f0;
        background: #fff;
        font-size: 1.1rem;
        margin-top: -0.3rem;
        transition: 0.3s;
        transform: fill;
      }
    }
    display: flex;
    gap: 12px;
  }
`;

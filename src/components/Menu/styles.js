import styled from "styled-components";

export const MenuWrapp = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: sticky;
  background: #000000c2;
  top: 0;
  z-index: 9999;
  nav {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a {
      padding: 1.2rem;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

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

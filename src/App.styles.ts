import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body{
    background: rgb(228,78,124);
    background: linear-gradient(159deg, rgba(228,78,124,1) 0%, rgba(168,168,255,1) 100%, rgba(0,212,255,1) 100%);
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    color: #5d0b86;
    letter-spacing: .3rem;
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold',
      sans-serif;
    filter: drop-shadow(2px 2px #0085a3);
    font-weight: 100;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;

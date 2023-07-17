import styled from 'styled-components';

export const Load = styled.div`
  background-image: linear-gradient(rgb(244, 6, 215) 20%, rgb(1, 239, 223));
  width: 100px;
  height: 100px;
  animation: spinning82341 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(244, 06, 215),
    0px 5px 20px 0px rgb(1, 239, 223);

  .spinner1 {
    background-color: rgb(36, 36, 36);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);
  }

  @keyframes spinning82341 {
    to {
      transform: rotate(360deg);
    }
  }
`;

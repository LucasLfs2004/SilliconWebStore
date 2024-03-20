import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
  height: 600px;
  align-items: center;
`;

export const Title = styled.h1`
  color: #5b43d6;
  line-height: 48px;
`;

export const EditorArea = styled.div`
  background: #ecf0f3;
  width: 85%;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  padding: 16px 0;
  border-radius: 15px;
  box-shadow: 10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset;
`;

export const EditorCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 500px;

  .ql-container {
    height: 460px;
  }
`;

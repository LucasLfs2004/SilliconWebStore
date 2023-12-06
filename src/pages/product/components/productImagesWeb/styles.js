import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  column-gap: 48px;
  background-color: #010f20;
  padding: 8px 24px 36px 24px;
  align-items: center;
  border-radius: 5px;
`;

export const ImagesColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const PreviewCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: #fff;
  box-shadow: -8px -8px 30px 0px rgba(209, 217, 230, 0.25),
    8px 8px 30px 0px rgba(209, 217, 230, 0.25);
  border-radius: 2px;
  border: none;
  cursor: pointer;

  img {
    width: 65px;
    max-height: 65px;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.div`
  box-shadow: -8px -8px 30px 0px rgba(209, 217, 230, 0.25),
    8px 8px 30px 0px rgba(209, 217, 230, 0.25);
  background-color: #fff;
  width: 520px;
  height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  img {
    width: 350px;
  }
`;

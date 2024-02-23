import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 64px;
`;

export const Title = styled.h1`
  color: #5b43d6;
  font-size: 24px;
  font-weight: 600;

  &.comment {
    font-size: 18px;
  }
`;

export const CommentsBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  flex-wrap: wrap;
`;

export const CardComment = styled.div`
  width: calc(50% - 36px);
  background-color: #ecf0f3;
  border-radius: 12px;
  padding: 12px 18px;
  background: #ecf0f3;
  box-shadow: 6px 6px 13px #e0e4e7 inset, -6px -6px 13px #f8fcff inset;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const RowTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Rate = styled.div`
  color: #5b43d6;
  font-size: 16px;
  font-weight: 600;
`;

export const TextComment = styled.p`
  font-size: 16px;
  color: #010f20;
`;

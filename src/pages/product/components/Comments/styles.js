import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 48px 48px 48px;
  row-gap: 24px;
`;

export const Title = styled.h1`
  color: #5b43d6;
  font-size: 24px;
  font-weight: 600;

  &.comment {
    font-size: 16px;
  }
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 1440px) {
    justify-content: flex-start;
    column-gap: 5%;
    /* width: 30%; */
  }
`;

export const CardComment = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: #ecf0f3;
  box-shadow: 5px 5px 9px #d7dadd, -5px -5px 9px #ffffff;
  row-gap: 16px;
  padding: 8px 14px;

  @media (min-width: 1440px) {
    width: 30%;
  }
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RatingComponent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  font-size: 14px;
  font-weight: 600;
  color: #02eddf;
`;

export const Text = styled.p`
  color: #010f20;
  font-size: 12px;
  font-weight: 400;

  &.mini {
    font-size: 10px;
    font-weight: 500;
  }
`;

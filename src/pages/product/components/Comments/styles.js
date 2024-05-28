import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px 5% 24px 5%;
  row-gap: 24px;
  max-width: 1440px;
  width: -webkit-fill-available;

  @media (min-width: 1024px) {
    padding: 0 48px 48px 48px;
  }
`;

export const Title = styled.h1`
  color: #5b43d6;
  font-size: 24px;
  font-weight: 600;

  &.left {
    width: 100%;
    text-align: left;
  }

  &.comment {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    &.comment {
      font-size: 18px;
    }
  }
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  row-gap: 24px;

  @media (min-width: 1024px) {
    justify-content: flex-start;
    column-gap: 5%;
    /* width: 30%; */
  }
`;

export const CardComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: #ecf0f3;
  box-shadow: 5px 5px 9px #d7dadd, -5px -5px 9px #ffffff;
  row-gap: 16px;
  padding: 8px 14px;

  @media (min-width: 600px) {
    width: 45%;
  }

  /* @media (min-width: 1440px) {
    width: 30%;
  } */
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

  @media (min-width: 1024px) {
    font-size: 14px;
    font-size: 500;

    &.mini {
      font-size: 12px;
    }
  }
`;

import styled from 'styled-components';

export const Resume = styled.section`
  margin: 0;
  background-color: #010f20;
  width: 95%;
  padding: 0 2.5%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

export const Icon = styled.img`
  max-height: 16px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`;

export const Title = styled.h1`
  color: #010f20;
  width: 100%;
  padding: 5px 0 0 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.blue {
    color: #5ce1e6;
  }
`;

export const Subtitle = styled.h2`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.spaced {
    padding-left: 34px;
  }

  &.mini {
    font-size: 12px;
  }

  &.margin-top {
    margin-top: 10px;
  }
`;

export const Span = styled.span`
  color: rgba(236, 240, 243, 0.7);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

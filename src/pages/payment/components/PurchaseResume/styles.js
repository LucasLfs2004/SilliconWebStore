import styled from 'styled-components';

export const Resume = styled.section`
  margin: 0;
  background-color: #010f20;
  width: 95%;
  padding: 12px 2.5%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media (min-width: 1024px) {
    min-height: calc(660px - 16px);
    width: 400px;
    padding: 16px 0 0 0;
    border-radius: 3px;
    justify-content: space-between;
  }
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumeList = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    row-gap: 10px;
    border-bottom: 1px solid #5ce1e6;
    margin: 0 12px;
    padding: 16px 10px 22px 10px;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const ResumeValues = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: calc(360px - 40px);
    padding: 10px 20px;
    margin: 0 20px;
    border-radius: 4px;
    background: linear-gradient(96deg, #011022 0%, #010e1d 100%);
    box-shadow: -10px -10px 16px 0px #021730, 10px 10px 16px 0px #010810;
    min-height: 160px;
  }
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

  &.align-top {
    align-items: start;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
  }

  /* @media (min-width: 1024px) {
    margin: 0 20px;
  } */
`;

export const PayMethod = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row-reverse;
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
  padding: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.blue {
    color: #5ce1e6;
  }

  @media (min-width: 1024px) {
    color: #fff;
    font-size: 20px;
    padding: 0 4px;
    border-bottom: 1px solid #5ce1e6;
    width: fit-content;
    margin: 0 20px;
    font-weight: 600;

    &.blue {
      color: #fff;
    }

    &.mini {
      font-size: 16px;
      margin: 0;
    }
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
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 220px;

  &.right {
    text-align: right;
  }

  &.spaced {
    padding-left: 34px;
  }

  &.mini {
    font-size: 12px;
  }

  &.margin-top {
    margin-top: 10px;
  }

  &.emphasis {
    font-size: 16px;
    font-weight: 500;
  }

  &.red {
    color: #f00;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-top: 16px;
    row-gap: 10px;
  }
`;

export const Span = styled.span`
  color: rgba(236, 240, 243, 0.7);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RowP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* p {
    color: #010f20;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 200px;
  } */

  /* p.grey {
    opacity: 0.7;
  } */

  /* p.purple {
    color: #5b43d6;
  } */

  @media (min-width: 1024px) {
    margin: 0;

    /* p,
    p.grey {
      font-size: 14px;
      font-weight: 500;
      opacity: 1;
      max-width: 160px;
    } */

    /* p.right {
      width: auto;
      text-align: end;
    } */

    p span {
      font-size: 10px;
      font-weight: 500;
    }

    &.total {
      border-top: 1px solid #5ce1e6;
      margin: 14px 0 0 0;
      padding: 4px 8px 0 8px;
    }

    &.total p {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const ButtonsPayment = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const ButtonNavigation = styled.button`
  border: none;
  display: flex;
  width: 95%;
  margin: 0 2.5%;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  background: #010f20;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.transparent {
    background-color: transparent;
    border: 1px solid #02eddf;
    color: #010f20;
  }

  @media (min-width: 1024px) {
    color: #010f20;
    background-color: #02eddf;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;

    &.transparent {
      color: #fff;
      border-color: #5b43d6;
    }
  }
`;

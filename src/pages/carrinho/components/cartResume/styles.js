import styled from 'styled-components';

export const CartResume = styled.div`
  width: 95%;
  padding: 0 2.5%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media (min-width: 1024px) {
    background-color: #fff;
    width: calc(360px);
    height: 605px;
    padding: 15px 0;
    row-gap: 22px;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  color: #5b43d6;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (min-width: 1024px) {
    width: fit-content;
    padding: 0 5px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid #02eddf;

    &.margin {
      margin: 0 22px;
    }
  }
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 22px;
`;

export const ResumeList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 11px;
`;

export const RowP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    color: #010f20;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 200px;
  }

  p.grey {
    opacity: 0.7;
  }

  p.purple {
    color: #5b43d6;
  }

  @media (min-width: 1024px) {
    margin: 0 22px;

    p,
    p.grey {
      font-size: 14px;
      font-weight: 500;
      opacity: 1;
      max-width: 160px;
    }

    p.right {
      width: auto;
      text-align: end;
    }

    p span {
      font-size: 10px;
      font-weight: 500;
    }

    &.total {
      border-top: 1px solid #5ce1e6;
      margin: 14px 14px 0 14px;
      padding: 4px 8px 0 8px;
    }

    &.total p {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const InCashPrice = styled.div`
  display: none;
  @media (min-width: 1024px) {
    border-radius: 4px;
    background: rgba(2, 237, 223, 0.2);
    box-shadow: -10px -10px 5px 0px rgba(255, 255, 255, 0.25) inset,
      10px 10px 5px 0px rgba(255, 255, 255, 0.25) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    justify-content: center;

    p {
      color: #010f20;
      font-size: 14px;
      font-weight: 700;
    }

    p.mini {
      font-size: 12px;
    }

    h2 {
      margin-top: 8px;
      color: #5b43d6;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 95%;
  padding: 50px 2.5%;

  a {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 4px;
  }

  a.payment {
    background-color: #010f20;
  }

  a.continue {
    border: 1px solid #02eddf;
    color: #010f20;
  }

  @media (min-width: 1024px) {
    padding: 18px 0;
    width: 100%;
  }
`;

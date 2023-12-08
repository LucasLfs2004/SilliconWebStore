import styled from 'styled-components';

export const TopInfos = styled.div`
  display: flex;
  flex-direction: column;
  background: #010f20;

  @media (min-width: 1024px) {
    background-color: transparent;
    padding-left: 48px;
    height: 30px;
  }
  /* box-shadow: 5px 5px 6px 0px #d1d9e6 inset, -5px -5px 6px 0px #fff inset; */
`;

export const RouteCategory = styled.p`
  margin: 4px 0px 6px 10px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  span {
    color: #5ce1e6;
  }

  @media (min-width: 1024px) {
    color: #010f20;
    font-size: 16px;
  }
`;

import { styled } from 'styled-components';

export const Container = styled.div`
  margin: 0;
`;

export const Menu = styled.section`
  margin: 0;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 60px;
  left: ${props => (props.show === 'true' ? '0' : '100vw')};
  display: block;
  transition: all 1s ease;
  background-color: #010f20;
  z-index: 200;

  @media (min-width: 1024px) {
    top: 80px;
    width: 375px;
    right: ${props => (props.show === 'true' ? '0' : '-375px')};
    left: auto;
    display: block;
  }
`;

export const UserRow = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  column-gap: 12px;
  height: 66px;
  padding-left: 20px;
  align-items: center;
  border-bottom: 1px solid #5059d7;

  @media (min-width: 1024px) {
    img {
      width: 52px;
    }
  }
`;

export const ActionUser = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-right: 15px;

  a {
    color: #fff;
    font-size: 10px;
  }

  p {
    color: #5059d7;
    font-size: 8px;
  }

  @media (min-width: 1024px) {
    a {
      font-size: 12px;
    }

    p {
      font-size: 10px;
    }
  }
`;

export const List = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const Item = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #c1c5d626;
  padding-left: 5px;
  a {
    line-height: 50px;
    font-size: 12px;
    color: #fff;
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    a {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const Sidebar = styled.button`
  margin: 0;
  background-color: transparent;
  border: none;

  @media (min-width: 1024px) {
    img {
      width: 30px;
    }
    cursor: pointer;
  }
`;

export const LoggedRow = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    font-size: 12px;
    color: #fff;
  }
`;

export const UserInfos = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  p {
    font-weight: 500;
    color: #fff;
    font-size: 12px;
  }

  .email {
    font-size: 7px;
  }
`;

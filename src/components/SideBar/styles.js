import { styled } from 'styled-components';

export const Menu = styled.section`
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 60px;
  left: ${props => (props.show === 'true' ? '0' : '100%')};
  display: ${props => (props.show === 'true' ? 'block' : 'none')};
  transition: all 1s ease;
  background-color: #010f20;
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
`;

export const ActionUser = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    font-size: 10px;
  }

  p {
    color: #5059d7;
    font-size: 8px;
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
`;

export const Sidebar = styled.button`
  margin: 0;
  background-color: transparent;
  border: none;
`;

export const Container = styled.div`
  margin: 0;
`;

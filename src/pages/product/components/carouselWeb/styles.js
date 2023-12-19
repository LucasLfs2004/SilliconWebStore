import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 50px;
  padding-left: 6rem;
  padding-right: 6rem;
  width: 800px;

  h2 {
    padding-left: 1rem;
    margin-bottom: 30px;
    color: #fff;
  }

  @media (max-width: 950px) {
    padding: 0 1.5rem;
    margin-bottom: 30px;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    h2 {
      padding-left: 0.5rem;
      margin-bottom: 15px;
      font-size: 18px;
    }
  }
  @media (max-width: 500px) {
    padding: 0 0.5rem;
    margin-bottom: 30px;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    h2 {
      padding-left: 0.5rem;
      margin-bottom: 15px;
      font-size: 18px;
    }
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Body = styled.section`
  height: auto;
`;

export const Title = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    text-shadow: 0.1em 0.1em 0.1em black;
  }

  @media (max-width: 620px) {
    h1 {
      font-size: 18px;
    }
  }
`;

export const SeeAll = styled.div`
  display: none;

  @media (max-width: 950px) {
    display: block;
    a {
      display: flex;
      text-decoration: none;
      flex-direction: row;
      align-items: center;
      margin-top: 5px;
      margin-right: 10px;
    }

    p {
      text-decoration: none;
      font-size: 22px;
      color: #fff;
      font-weight: 500;
    }

    img {
      margin-left: 10px;
      width: 15px;
      height: 22.5px;
    }
  }
  @media (max-width: 500px) {
    display: block;
    a {
      margin-right: 4px;
    }

    p {
      font-size: 12px;
    }

    img {
      margin-left: 9px;
      width: 10px;
      height: 15px;
    }
  }
`;

export const LeftArrow = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: 0.7;
  transition: all ease 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  img {
    width: 24px;
    height: 34px;
  }

  @media (max-width: 950px) {
    cursor: auto;
  }

  @media (max-width: 620px) {
    img {
      height: 20px;
      width: 20px;
    }
  }
`;

export const RightArrow = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: 0.7;
  transition: all ease 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  img {
    width: 24px;
    height: 34px;
  }

  @media (max-width: 950px) {
    cursor: auto;
  }

  @media (max-width: 620px) {
    img {
      height: 20px;
      width: 20px;
    }
  }
`;

export const Area = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: 620px) {
    height: inherit;
  }
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -${props => props.marginLeft}px;
  transition: margin-left 0.5s ease-in-out;
  a {
    text-align: center;
    text-decoration: none;
  }

  @media (max-width: 960px) {
    align-items: center;
    /* flex-direction: row; */
  }
`;

export const ContentScroll = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Item = styled.div`
  display: inline-block;
  width: ${props => props.width}px;
  min-width: 20%;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  transform: scale(0.9);
  transition: all ease 0.2s;
  border-radius: 20px;
  margin: 0 ${props => props.marginItem}px;

  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1);
  }

  @media (max-width: 620px) {
    overflow: hidden;
    margin: 0;
    border-radius: 15px;

    &:hover {
      transform: none;
    }
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 7px;
  margin-top: 5px;
  color: #fff;
  text-decoration: none;
`;

export const Strong = styled.strong`
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  font-weight: 400;
  color: #ffffff50;
`;

export const NoInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  margin: 100px 0px;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #ff00b7;

  img {
    width: 19px;
    height: 44px;
  }

  @media (max-width: 920px) {
    width: 100%;
    padding: 0 10%;
    margin: 50px 0;
  }
`;

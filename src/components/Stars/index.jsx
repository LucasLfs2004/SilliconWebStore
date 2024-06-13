import * as C from './styles';

const Stars = ({ rating, height }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push('starComplete.svg');
    } else if (rating + 0.99 > i) {
      stars.push('starHalf.svg');
    } else {
      stars.push('starEmpty.svg');
    }
  }

  return (
    <C.Row height={height}>
      {stars.map((item, index) => (
        <img alt='' src={`/assets/icons/${item}`} key={index} />
      ))}
    </C.Row>
  );
};

export default Stars;

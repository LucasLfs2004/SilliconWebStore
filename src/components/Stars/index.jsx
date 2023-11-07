import * as C from './styles';

const Stars = ({ rating }) => {
  const value = parseInt(rating);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push('starComplete.svg');
    } else if (i > value) {
      stars.push('starHalf.svg');
    } else {
      stars.push('starEmpty.svg');
    }
  }

  // console.log(stars);
  return (
    <C.Row>
      {stars.map((item, index) => (
        <img alt='' src={`/assets/icons/${item}`} key={index} />
      ))}
    </C.Row>
  );
};

export default Stars;

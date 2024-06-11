import * as C from './styles';

const Stars = ({ rating, height }) => {
  // const value = parseInt(rating);
  // console.log('rating_int',value)
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    // console.log({rating: rating,
    //                       i: i,
    //                     value: value})
    if (i <= rating) {
      stars.push('starComplete.svg');
    } else if (rating + 0.99 > i) {
      stars.push('starHalf.svg');
    } else {
      stars.push('starEmpty.svg');
    }
  }

  // console.log(stars);
  return (
    <C.Row height={height}>
      {stars.map((item, index) => (
        <img alt='' src={`/assets/icons/${item}`} key={index} />
      ))}
    </C.Row>
  );
};

export default Stars;

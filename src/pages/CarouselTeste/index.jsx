import { useEffect, useRef, useState } from 'react';
import { api_path } from '../../constants/api_path';
import * as C from './styles';

const CarouselTeste = () => {
  const arrayTeste = [
    '1702917824.8963342iphone15pro_5.jpeg',
    '1702917824.8984802iphone15pro_6.jpeg',
    '1702917824.89391iphone15pro_4.jpeg',
    '1702917824.881082iphone15pro_2.jpeg',
    '1702917824.9114602iphone15pro_7.jpeg',
    '1702917824.864584iphone15pro_1.jpeg',
    '1702917824.8915389iphone15pro_3.jpeg',
  ];

  const heightAreaRef = useRef(null);
  const heightScroll = useRef(null);
  const [itemMargin, setItemMargin] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const itemSize = 70;

  useEffect(() => {
    console.log(heightAreaRef.current.offsetHeight);
    setItemMargin((heightAreaRef.current.offsetHeight / 4 - itemSize) / 2);
    console.log(
      'itemMargin',
      (heightAreaRef.current.offsetHeight / 4 - itemSize) / 2,
    );
  }, []);

  const handleUpScroll = () => {
    if (scrollY - heightAreaRef.current.offsetHeight >= 0) {
      setScrollY(scrollY - heightAreaRef.current.offsetHeight);
    } else {
      setScrollY(0);
    }
  };
  const handleDownScroll = () => {
    let y = scrollY;
    const area = heightAreaRef.current?.offsetHeight;
    const scroll = heightScroll.current?.offsetHeight;
    const top = y + area;
    let maxTop = scroll - area;
    console.log({
      scrollY: scrollY,
      maxTop: maxTop,
      area: area,
      top: top,
      scroll: scroll,
    });
    if (scrollY <= maxTop - area) {
      setScrollY(top);
      console.log('scrollY', top);
    } else if (scrollY < maxTop) {
      setScrollY(maxTop);
      console.log('scrollY', maxTop);
    }
  };

  return (
    <C.Container>
      <C.Card>
        <C.Carousel>
          <C.UpArrow onClick={() => handleUpScroll()}>
            <img src='/assets/icons/arrowIcon.svg' alt='' />
          </C.UpArrow>
          <C.Column ref={heightAreaRef}>
            <C.Scroll margintop={scrollY} ref={heightScroll}>
              {arrayTeste.map((item, key) => (
                <C.ItemCard key={key} marginitem={itemMargin}>
                  <img src={`${api_path}/image/product/${item}`} alt={item} />
                </C.ItemCard>
              ))}
            </C.Scroll>
          </C.Column>
          <C.DownArrow onClick={() => handleDownScroll()}>
            <img src='/assets/icons/arrowIcon.svg' alt='' />
          </C.DownArrow>
        </C.Carousel>
      </C.Card>
    </C.Container>
  );
};

export default CarouselTeste;

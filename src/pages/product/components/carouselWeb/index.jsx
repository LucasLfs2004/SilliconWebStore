import { useEffect, useRef, useState } from 'react';
import { api_path } from '../../../../constants/api_path';
import * as C from './styles';

export const CarouselImageWeb = ({ items }) => {
  const [scrollX, setScrollX] = useState(0);
  const [data, setData] = useState([{}]);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const photoWidthRef = useRef(null);

  const largura = window.screen.width;
  const [itemMargin, setItemMargin] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const widthAreaRef = useRef(null);
  const widthScroll = useRef(null);
  const numberOfItems = 5;

  const handleLeftArrow = () => {
    let x = scrollX;
    const area = widthAreaRef?.current?.offsetWidth;
    const left = x - area;
    if (left >= 0) {
      setScrollX(left);
    } else {
      setScrollX(0);
    }
  };

  const handleRightArrow = () => {
    let x = scrollX;
    const area = widthAreaRef.current?.offsetWidth;
    const scroll = widthScroll.current?.offsetWidth;
    const left = x + area;
    let maxLeft = scroll - area;
    if (scrollX <= maxLeft - area) {
      setScrollX(left);
    } else if (scrollX < maxLeft) {
      setScrollX(maxLeft);
    }
  };

  useEffect(() => {
    setData(items);
  }, [data, items]);

  useEffect(() => {
    let width = parseInt(widthAreaRef?.current?.offsetWidth / 70) * 70;
    // setItemMargin(
    //   (widthAreaRef.current.offsetWidth - width) /
    //     2 /
    //     parseInt(widthAreaRef?.current?.offsetWidth / 70),
    // );
    setItemWidth(widthAreaRef.current.offsetWidth / 5);
    console.log(itemWidth);
  }, []);

  console.log('widthAreaRef: ', widthAreaRef?.current?.offsetWidth);

  return (
    <C.Container>
      <C.Line>
        <C.LeftArrow onClick={handleLeftArrow}>
          <img src='/assets/icons/arrowIcon.svg' alt='' />
        </C.LeftArrow>
        <C.Area ref={widthAreaRef}>
          <C.Scroll marginLeft={scrollX} ref={widthScroll}>
            <C.ContentScroll width={largura}>
              {items.length > 0 &&
                items.map((item, index) => (
                  <div key={index}>
                    <C.Item marginItem={itemMargin} width={itemWidth}>
                      <img
                        src={`${api_path}/image/product/${item}`}
                        alt={item.original_title}
                        ref={photoWidthRef}
                      />
                    </C.Item>
                  </div>
                ))}
            </C.ContentScroll>
          </C.Scroll>
        </C.Area>
        <C.RightArrow onClick={handleRightArrow}>
          <img src='/assets/icons/arrowIcon.svg' alt='' />
        </C.RightArrow>
      </C.Line>
    </C.Container>
  );
};

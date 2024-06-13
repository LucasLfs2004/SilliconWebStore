import SimpleInfos from '../simpleInfos';
import * as C from './styles';

const TopInfos = ({ product }) => {
  return (
    <C.TopInfos>
      <C.RouteCategory>
        {product?.category}
        <span>{' > '}</span> {product?.brand?.name}
      </C.RouteCategory>
      {window.screen.width < 1024 && <SimpleInfos product={product} />}
    </C.TopInfos>
  );
};

export default TopInfos;

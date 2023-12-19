import SimpleInfos from '../simpleInfos';
import * as C from './styles';

const TopInfos = ({ product }) => {
  // const departmentProduct = department.find(
  //   item => item.id === categoryProduct.department_id,
  // );
  // const brandProduct = brands.find(item => item.id === product.brand_id);

  return (
    <C.TopInfos>
      <C.RouteCategory>
        {/* {departmentProduct.name}  */}
        {/* <span>
          {' > '}</span>  */}
        {product?.category}
        <span>{' > '}</span> {product?.brand?.name}
      </C.RouteCategory>
      {window.screen.width < 1024 && <SimpleInfos product={product} />}
    </C.TopInfos>
  );
};

export default TopInfos;

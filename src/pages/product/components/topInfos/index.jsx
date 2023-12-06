import { brands } from '../../../../falseDatabase/brands';
import { department } from '../../../../falseDatabase/department';
import SimpleInfos from '../simpleInfos';
import * as C from './styles';

const TopInfos = ({ categoryProduct, product }) => {
  const departmentProduct = department.find(
    item => item.id === categoryProduct.department_id,
  );
  const brandProduct = brands.find(item => item.id === product.brand_id);

  return (
    <C.TopInfos>
      <C.RouteCategory>
        {departmentProduct.name} <span>{' > '}</span> {categoryProduct.name}
        <span>{' > '}</span> {brandProduct.brand}
      </C.RouteCategory>
      {window.screen.width < 1024 && (
        <SimpleInfos brandProduct={brandProduct} product={product} />
      )}
    </C.TopInfos>
  );
};

export default TopInfos;

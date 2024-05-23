import BtnSubmit from '../../../components/BtnSubmit';
import {
  InputCheckboxNeumorphism,
  InputDateNeumorphism,
  InputNeumorphism,
  InputNumberNeumorphism,
  InputValueNeumorphism,
} from '../../../components/InputNeumorphism';
import { parseRealCurrency } from '../../../functions/realCurrency';
import * as C from '../styles';
import useAdminPage from '../useAdminPage';

const VoucherComponent = () => {
  const {
    vouchers,
    handleDeleteVoucher,
    postVoucherRequest,
    voucherCode,
    setVoucherCode,
    voucherDiscount,
    setVoucherDiscount,
    voucherExpiration,
    setVoucherExpiration,
    voucherMinValue,
    setVoucherMinValue,
    voucherPercentualDiscount,
    setVoucherPercentualDiscount,
  } = useAdminPage();
  console.log('vouchers', vouchers);
  return (
    <C.ComponentNeumorphism>
      <C.Title>Cupons de desconto</C.Title>
      <C.ListContent>
        {vouchers &&
          vouchers.map((item, index) => (
            <C.RowCard key={`categorys-row-component-${index}`}>
              <C.NameComponent>{item.code}</C.NameComponent>
              <C.IdComponent className='set-width' width={'200px'}>
                <span>Desconto:</span>{' '}
                {item.discount > 1
                  ? parseRealCurrency(item.discount)
                  : `${item.discount * 100}%`}
              </C.IdComponent>
              <C.ActionsArea>
                <C.BtnAction onClick={() => handleDeleteVoucher(item.code)}>
                  <img src='/assets/icons/trash.svg' alt='' />
                </C.BtnAction>
              </C.ActionsArea>
            </C.RowCard>
          ))}
      </C.ListContent>
      <C.Title className='mini left'>Novo cupom de desconto</C.Title>
      <C.Form onSubmit={e => postVoucherRequest(e)}>
        <C.Box>
          <C.Column>
            <InputNeumorphism
              id={'voucher-code'}
              label={'Cupom:'}
              placeholder={'cupom'}
              valueInput={voucherCode}
              setValueInput={setVoucherCode}
              width={'76%'}
            />
            <InputNumberNeumorphism
              id={'voucher-discount'}
              label={`Desconto ${voucherPercentualDiscount ? '(%)' : '(R$)'}:`}
              placeholder={'desconto'}
              valueInput={voucherDiscount}
              setValueInput={setVoucherDiscount}
              width={'76%'}
            />
            <InputCheckboxNeumorphism
              id={'voucher-discount'}
              label={'Desconto percentual'}
              placeholder={'desconto'}
              valueInput={voucherPercentualDiscount}
              setValueInput={setVoucherPercentualDiscount}
              width={'76%'}
            />
            <InputValueNeumorphism
              id={'voucher-min-value'}
              label={'Valor mínimo (R$):'}
              placeholder={'valor mínimo'}
              valueInput={voucherMinValue}
              setValueInput={setVoucherMinValue}
              width={'76%'}
            />
            <InputDateNeumorphism
              id={'voucher-expiration'}
              label={'Validade:'}
              placeholder={'validade'}
              valueInput={voucherExpiration}
              setValueInput={setVoucherExpiration}
              width={'76%'}
            />
          </C.Column>
        </C.Box>
        <BtnSubmit type='submit' text={'Adicionar'} />
      </C.Form>
    </C.ComponentNeumorphism>
  );
};

export default VoucherComponent;

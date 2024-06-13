import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toastErr, toastSuc } from '../../components/ToastComponent';
import {
  deleteBanner,
  deleteBrand,
  deleteCategory,
  deleteVoucher,
  getBanners,
  getBrands,
  getCategorys,
  getVouchers,
  patchBanner,
  patchBrand,
  patchCategory,
  postBanner,
  postBrand,
  postCategory,
  postVoucher,
} from '../../services/Requests';

const useAdminPage = () => {
  const user = useSelector(state => state.user);

  // Category
  const [categoryEditId, setCategoryEditId] = useState(null);
  const [categoryNameInput, setCategoryNameInput] = useState('');
  const [iconCategory, setIconCategory] = useState(null);

  // Brand
  const [brandEditId, setBrandEditId] = useState(null);
  const [brandNameInput, setBrandNameInput] = useState('');
  const [logoBrand, setLogoBrand] = useState(null);
  const [blackLogoBrand, setBlackLogoBrand] = useState(null);

  // Banner
  const [bannerEditId, setBannerEditId] = useState(null);
  const [bannerWeb, setBannerWeb] = useState(null);
  const [bannerMobile, setBannerMobile] = useState(null);
  const [linkPath, setLinkPath] = useState('');

  // Voucher
  const [voucherCode, setVoucherCode] = useState('');
  const [voucherDiscount, setVoucherDiscount] = useState('');
  const [voucherExpiration, setVoucherExpiration] = useState('');
  const [voucherMinValue, setVoucherMinValue] = useState(null);
  const [voucherPercentualDiscount, setVoucherPercentualDiscount] =
    useState(false);

  const { data: brands, refetch: refetchBrand } = useQuery({
    queryKey: ['brands-admin-page'],
    queryFn: async () => await getBrands(),
  });
  const { data: categorys, refetch: refetchCategory } = useQuery({
    queryKey: ['categorys-admin-page'],
    queryFn: async () => await getCategorys(),
  });

  const { data: banners, refetch: refetchBanners } = useQuery({
    queryKey: ['banners-data'],
    queryFn: async () => await getBanners(),
  });

  const { data: vouchers, refetch: refetchVouchers } = useQuery({
    queryKey: ['vouchers-data'],
    queryFn: async () => await getVouchers(user.access_token),
  });

  const handleFileChange = event => {
    const newfile = Array.from(event.target.files);

    const newImages = newfile.map(file => URL.createObjectURL(file));

    return { preview: newImages[0], file: newfile[0] };
  };

  const categoryRequest = async e => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData();
    formData.append('name', categoryNameInput);

    if (
      categoryEditId !== null &&
      categoryEditId !== undefined &&
      categoryEditId !== '' &&
      categoryNameInput.length > 0
    ) {
      formData.append('id', categoryEditId);
      const response = await patchCategory(formData, user.access_token);
      if (response) {
        toastSuc('Categoria editada com sucesso');
        refetchCategory();
        cleanCategoryForm();
      } else {
        toastErr('Não foi possível concluir, por favor tente novamente');
      }
    } else {
      const response = await postCategory(formData, user.access_token);
      if (response) {
        toastSuc(`Categoria ${categoryNameInput} cadastrada!`);
        refetchCategory();
        cleanCategoryForm();
      } else {
        toastErr('Não foi possível concluir, por favor tente novamente');
      }
    }
  };

  const brandRequest = async e => {
    e.preventDefault();
    e.stopPropagation();
    // let response;
    const formData = new FormData();

    formData.append('name', brandNameInput);

    if (logoBrand?.file) {
      formData.append('brand_logo', logoBrand.file, logoBrand.file.name);
    }
    if (blackLogoBrand?.file) {
      formData.append(
        'brand_logo_black',
        blackLogoBrand.file,
        blackLogoBrand.file.name,
      );
    }

    if (
      brandEditId !== null &&
      brandEditId !== '' &&
      brandEditId !== undefined &&
      brandNameInput.length > 0
    ) {
      formData.append('id', brandEditId);
      const response = await patchBrand(formData, user.access_token);
      if (response) {
        toastSuc(`Marca editada com sucesso`);
        refetchBrand();
        cleanBrandForm();
      } else {
        toastErr('Não foi possível concluir, por favor tente novamente');
      }
    } else {
      const response = await postBrand(formData, user.access_token);
      if (response) {
        toastSuc(`Marca ${brandNameInput} cadastrada!`);
        refetchBrand();
        cleanBrandForm();
      } else {
        toastErr('Não foi possível concluir, por favor tente novamente');
      }
    }
  };

  const postBannerRequest = async e => {
    e.preventDefault();
    e.stopPropagation();

    if (linkPath.length > 0 && bannerMobile?.file && bannerWeb?.file) {
      const formData = new FormData();

      formData.append('link_redirect', linkPath);

      formData.append('image_web', bannerWeb.file, bannerWeb.file.name);
      formData.append(
        'image_mobile',
        bannerMobile.file,
        bannerMobile.file.name,
      );

      const response = await postBanner(formData, user.access_token);
      if (response) {
        toastSuc('Novo banner adicionado!');
        refetchBanners();
        cleanBannerForm();
      } else {
        toastErr('Não foi possível concluir, por favor tente novamente');
      }
    } else {
      toastErr('Preencha todos os campos do formulário');
    }
  };

  const postVoucherRequest = async e => {
    e.preventDefault();
    e.stopPropagation();

    let discount = 0;
    if (voucherPercentualDiscount) {
      if (voucherDiscount <= 60) {
        discount = parseFloat(voucherDiscount / 100);
      } else {
        toastErr('O desconto percentual não pode ser maior que 60%');
        return;
      }
    } else {
      discount = parseFloat(voucherDiscount);
    }

    if (voucherMinValue === null || voucherMinValue === '') {
      toastErr('Preencha um valor mínimo para o cupom de desconto');
      return;
    }

    if (voucherExpiration === null || voucherExpiration === '') {
      toastErr('Preencha uma expiração válida para a data de expiração');
      return;
    }

    const postData = {
      code: voucherCode,
      discount: discount,
      expiration: parseInt(moment(voucherExpiration).unix()),
      min_value: parseFloat(voucherMinValue),
    };

    const response = await postVoucher(postData, user?.access_token);
    if (response === true) {
      toastSuc('Novo cupom de desconto adicionado!');
      refetchVouchers();
      cleanVoucherForm();
    } else {
      toastErr('Não foi possível concluir, por favor tente novamente');
    }
  };

  const patchBannerRequest = async e => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData();

    formData.append('id', bannerEditId);

    linkPath.length > 0 && formData.append('link_redirect', linkPath);

    bannerWeb?.file &&
      formData.append('image_web', bannerWeb.file, bannerWeb.file.name);

    bannerMobile?.file &&
      formData.append(
        'image_mobile',
        bannerMobile.file,
        bannerMobile.file.name,
      );

    const response = await patchBanner(formData, user.access_token);
    if (response) {
      toastSuc(`Banner editado com sucesso`);
      refetchBanners();
      cleanBannerForm();
    } else {
      toastErr('Não foi possível concluir, por favor tente novamente');
    }
  };

  const handleDeleteCategory = async id => {
    const response = await deleteCategory(id, user.access_token);
    if (response) {
      toastSuc(`Categoria deletada!`);
      cleanCategoryForm();
      refetchCategory();
    }
  };

  const handleDeleteBrand = async id => {
    const response = await deleteBrand(id, user.access_token);
    if (response) {
      toastSuc(`Marca deletada!`);
      cleanBrandForm();
      refetchBrand();
    }
  };

  const handleDeleteBanner = async id => {
    const response = await deleteBanner(id, user.access_token);
    if (response) {
      refetchBanners();
      toastSuc('Banner excluído');
    } else {
      toastErr('Não foi possível excluir o banner');
    }
  };

  const handleDeleteVoucher = async code => {
    const response = await deleteVoucher(code, user.access_token);
    if (response) {
      refetchVouchers();
      toastSuc('Voucher excluído');
    } else {
      toastErr('Não foi possível excluir o voucher');
    }
  };

  const cleanCategoryForm = () => {
    setCategoryEditId(null);
    setCategoryNameInput('');
  };

  const cleanBrandForm = () => {
    setBrandEditId(null);
    setBrandNameInput('');
    setBlackLogoBrand(null);
    setLogoBrand(null);
  };

  const cleanBannerForm = () => {
    setBannerEditId(null);
    setLinkPath('');
    setBannerMobile(null);
    setBannerWeb(null);
  };

  const cleanVoucherForm = () => {
    setVoucherCode('');
    setVoucherDiscount('');
    setVoucherMinValue('');
  };

  return {
    brands,
    categorys,
    banners,
    categoryRequest,
    categoryNameInput,
    setCategoryNameInput,
    brandEditId,
    setBrandEditId,
    categoryEditId,
    setCategoryEditId,
    iconCategory,
    setIconCategory,
    logoBrand,
    setLogoBrand,
    blackLogoBrand,
    setBlackLogoBrand,
    brandNameInput,
    setBrandNameInput,
    handleFileChange,
    cleanCategoryForm,
    cleanBrandForm,
    brandRequest,
    handleDeleteCategory,
    handleDeleteBrand,
    linkPath,
    setLinkPath,
    bannerMobile,
    setBannerMobile,
    bannerWeb,
    setBannerWeb,
    postBannerRequest,
    patchBannerRequest,
    bannerEditId,
    setBannerEditId,
    handleDeleteBanner,
    vouchers,
    handleDeleteVoucher,
    voucherCode,
    setVoucherCode,
    voucherDiscount,
    setVoucherDiscount,
    voucherExpiration,
    setVoucherExpiration,
    postVoucherRequest,
    voucherMinValue,
    setVoucherMinValue,
    voucherPercentualDiscount,
    setVoucherPercentualDiscount,
  };
};

export default useAdminPage;

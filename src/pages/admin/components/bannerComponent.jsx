import BtnSubmit from '../../../components/BtnSubmit';
import {
  InputImgNeumorphism,
  InputNeumorphism,
} from '../../../components/InputNeumorphism';
import { api_path } from '../../../constants/api_path';
import * as C from '../styles';
import useAdminPage from '../useAdminPage';

const BannerComponent = () => {
  const {
    banners,
    bannerEditId,
    setBannerEditId,
    bannerMobile,
    setBannerMobile,
    bannerWeb,
    setBannerWeb,
    linkPath,
    setLinkPath,
    postBannerRequest,
    patchBannerRequest,
    handleFileChange,
    handleDeleteBanner,
  } = useAdminPage();
  return (
    <C.ComponentNeumorphism>
      <C.Title>Banner</C.Title>

      <C.ListBanners>
        {banners?.length > 0 &&
          banners.map(banner => (
            <C.BannerItem>
              <p className='id'>
                ID: <span>{banner.id}</span>
              </p>
              <C.BannerImgArea>
                <p>Banner Web:</p>
                <img
                  className='web'
                  src={`${api_path}/image/banner/${banner.img_banner_web}`}
                  alt=''
                />
                <p>Banner Mobile:</p>
                <img
                  className='mobile'
                  src={`${api_path}/image/banner/${banner.img_banner_mobile}`}
                  alt=''
                />
              </C.BannerImgArea>
              <p className='id'>
                Link: <span>{banner.link}</span>
              </p>
              <C.BottomBannerArea>
                <C.BtnBanner
                  className='edit'
                  onClick={() => {
                    setBannerEditId(banner.id);

                    // setBrandEditId(item.id);
                    setLinkPath(banner.link);
                    setBannerWeb({
                      preview: `${api_path}/image/banner/${banner.img_banner_web}`,
                    });
                    setBannerMobile({
                      preview: `${api_path}/image/banner/${banner.img_banner_mobile}`,
                    });
                  }}
                >
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    className='edit-icon'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3.33008 55.9534H56.6634M3.33008 55.9534V42.6201L29.9967 15.9535M3.33008 55.9534H16.6634L43.3301 29.2868M29.9967 15.9535L39.5587 6.39132L39.5647 6.38565C40.8807 5.06938 41.5401 4.41008 42.3001 4.16315C42.9697 3.94562 43.6907 3.94562 44.3604 4.16315C45.1197 4.40992 45.7784 5.06845 47.0927 6.38285L52.8921 12.1822C54.2121 13.5023 54.8724 14.1626 55.1197 14.9237C55.3374 15.5932 55.3371 16.3143 55.1197 16.9838C54.8727 17.7443 54.2134 18.4037 52.8951 19.7218L52.8921 19.7247L43.3301 29.2868M29.9967 15.9535L43.3301 29.2868'
                      stroke='#c3c6ce'
                      strokeWidth='6'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </C.BtnBanner>
                <C.BtnBanner onClick={() => handleDeleteBanner(banner.id)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='36'
                    height='30'
                    className='trash-icon'
                    viewBox='0 0 10 12'
                    fill='#c3c6ce'
                  >
                    <path d='M4.04 0C3.64532 0 3.32 0.325313 3.32 0.72V1.2H1.445C1.415 1.19438 1.385 1.19438 1.355 1.2H0.920004C0.912504 1.2 0.905004 1.2 0.897504 1.2C0.765316 1.20656 0.662191 1.31906 0.668754 1.45125C0.675316 1.58344 0.787816 1.68656 0.920004 1.68H1.1825L2.045 11.4C2.075 11.7356 2.36094 12 2.6975 12H7.3025C7.63907 12 7.925 11.7356 7.955 11.4L8.8175 1.68H9.08C9.16625 1.68094 9.24688 1.63594 9.29094 1.56094C9.33407 1.48594 9.33407 1.39406 9.29094 1.31906C9.24688 1.24406 9.16625 1.19906 9.08 1.2H6.68V0.72C6.68 0.325313 6.35469 0 5.96 0H4.04ZM4.04 0.48H5.96C6.095 0.48 6.2 0.585 6.2 0.72V1.2H3.8V0.72C3.8 0.585 3.905 0.48 4.04 0.48ZM1.6625 1.68H8.3375L7.475 11.3625C7.4675 11.4459 7.37844 11.52 7.3025 11.52H2.6975C2.62157 11.52 2.5325 11.4459 2.525 11.3625L1.6625 1.68ZM3.5375 2.3925C3.52719 2.39438 3.51688 2.39719 3.5075 2.4C3.39594 2.42531 3.31719 2.52562 3.32 2.64V10.56C3.31907 10.6462 3.36407 10.7269 3.43907 10.7709C3.51407 10.8141 3.60594 10.8141 3.68094 10.7709C3.75594 10.7269 3.80094 10.6462 3.8 10.56V2.64C3.80282 2.57063 3.77469 2.50406 3.725 2.45719C3.67438 2.40938 3.60594 2.38594 3.5375 2.3925ZM4.9775 2.3925C4.96719 2.39438 4.95688 2.39719 4.9475 2.4C4.83594 2.42531 4.75719 2.52562 4.76 2.64V10.56C4.75907 10.6462 4.80407 10.7269 4.87907 10.7709C4.95407 10.8141 5.04594 10.8141 5.12094 10.7709C5.19594 10.7269 5.24094 10.6462 5.24 10.56V2.64C5.24282 2.57063 5.21469 2.50406 5.165 2.45719C5.11438 2.40938 5.04594 2.38594 4.9775 2.3925ZM6.4175 2.3925C6.40719 2.39438 6.39688 2.39719 6.3875 2.4C6.27594 2.42531 6.19719 2.52562 6.2 2.64V10.56C6.19907 10.6462 6.24407 10.7269 6.31907 10.7709C6.39407 10.8141 6.48594 10.8141 6.56094 10.7709C6.63594 10.7269 6.68094 10.6462 6.68 10.56V2.64C6.68282 2.57063 6.65469 2.50406 6.605 2.45719C6.55438 2.40938 6.48594 2.38594 6.4175 2.3925Z' />
                  </svg>
                </C.BtnBanner>
              </C.BottomBannerArea>
            </C.BannerItem>
          ))}
      </C.ListBanners>
      <C.Title className='mini left'>
        {' '}
        {bannerEditId !== undefined && bannerEditId !== null
          ? `Editar banner: ${bannerEditId}`
          : 'Novo banner'}
      </C.Title>
      <C.Form
        onSubmit={e =>
          bannerEditId ? patchBannerRequest(e) : postBannerRequest(e)
        }
      >
        <C.Box className='box-form break-mobile'>
          <C.Column>
            <InputNeumorphism
              id={'link-path'}
              label={'Link:'}
              placeholder={'link'}
              valueInput={linkPath}
              setValueInput={setLinkPath}
              width={'76%'}
            />
            <InputImgNeumorphism
              id={'banner-web-img'}
              multipleFiles={false}
              label={'Banner Web'}
              setValueInput={e => setBannerWeb(handleFileChange(e))}
              placeholder={'banner web'}
            />
            <InputImgNeumorphism
              id={'banner-mobile-img'}
              multipleFiles={false}
              label={'Banner Mobile:'}
              setValueInput={e => setBannerMobile(handleFileChange(e))}
              placeholder={'banner mobile'}
            />
          </C.Column>
          <C.Column className='flex-end'>
            {bannerWeb?.preview && (
              <C.BannerImgArea>
                <p>Banner web:</p>
                <img className='web' src={bannerWeb.preview} alt='' />
              </C.BannerImgArea>
            )}
            {bannerMobile?.preview && (
              <C.BannerImgArea>
                <p>Banner Mobile:</p>
                <img className='mobile' src={bannerMobile.preview} alt='' />
              </C.BannerImgArea>
            )}
          </C.Column>
        </C.Box>
        <BtnSubmit type='submit' text={bannerEditId ? 'Editar' : 'Adicionar'} />
      </C.Form>
    </C.ComponentNeumorphism>
  );
};

export default BannerComponent;

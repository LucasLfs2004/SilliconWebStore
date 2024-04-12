import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuc = message => {
  toast.success(message, {
    position: 'top-center',
    transition: Bounce,
    style: {
      backgroundColor: '#ECF0F3',
      color: '#010f20',
      boxShadow:
        '10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset',
    },
    autoClose: 750,
  });
};

export const toastErr = message => {
  toast.error(message, {
    position: 'top-center',
    transition: Bounce,
    style: {
      backgroundColor: '#ECF0F3',
      color: '#010f20',
      boxShadow:
        '10px 10px 20px 0px #d1d9e6 inset, -10px -10px 20px 0px #fff inset',
    },
    autoClose: 750,
  });
};
export const ToastComponent = () => {
  return <ToastContainer />;
};

export default ToastComponent;
